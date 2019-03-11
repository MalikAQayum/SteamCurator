function titleNewAppid(clanid){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/curator/"+clanid+"/admin/overview",
        onreadystatechange: function(res) {
            //console.log("readyState changed to: " + res.readyState);
        },
        onload: function(res) {
            if(res.status === 200){
                var overviewPage = res.responseText;
                var start_pos_ro = overviewPage.indexOf('<div class="overview_section">') + 4;
                var end_pos_ro = overviewPage.indexOf('<h4>View Your Impact</h4>',start_pos_ro);
                var between_ro = overviewPage.substring(start_pos_ro,end_pos_ro);
                var recent3offers = between_ro.match(/apps\/(.*?)\/capsule/gm);
                recent3offers = recent3offers.toString().replace(/apps\//g,'').replace(/\/capsule/g,'');

                if(localStorage.getItem("r3o_old") !== null){
                    if(localStorage.getItem("r3o_old") === recent3offers){
                        //no new appids
                    }else{
                        $.titleAlert("New Appid! => [" + recent3offers.split(",")[0] +"]", {
                            requireBlur:true,
                            stopOnFocus:true,
                            interval:300
                        });
                        localStorage.setItem("r3o_old",recent3offers);
                        PCGameitNewestAppid(recent3offers.split(",")[0])
                    }
                }else{
                    localStorage.setItem("r3o_old",recent3offers);
                }
            }else if(res.status === 500){
                console.log("status "+ res.status+" => Internal Server Error");
                setTimeout(function(){titleNewAppid(clanid);}, 100);
            }else{
                console.log("status "+ res.status+" => Unknown Error?");
                setTimeout(function(){titleNewAppid(clanid);}, 100);
            }
        }
    });
}