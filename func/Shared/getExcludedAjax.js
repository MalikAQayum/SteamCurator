function getExcludedAjax(clanid){
        //var clanid="33779114-pcgameit";

    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/curator/"+clanid+"/admin/excluded?ajax=1",
        onreadystatechange: function(res) {
            //console.log("readyState changed to: " + res.readyState);
        },
        onload: function(res) {
            if(res.status === 200){
                localStorage.setItem('eSource',res.responseText);
                console.log("status "+ res.status+" => Success");
                var excludedappids = res.responseText.match(/app-ctn-[0-9]*"/g);
                for(var i=0; i < excludedappids.length; i++) {
                    excludedappids[i] = excludedappids[i].replace(/app-ctn-/g, '').replace(/"/g, '');
                }
                console.log(clanid);
                localStorage.setItem('eAppids',excludedappids.length);
            }else if(res.status === 500){
                console.log("status "+ res.status+" => Internal Server Error");
                setTimeout(function(){getExcludedAjax(clanid);}, 100);
            }else if(res.status === 302){
                console.log(clanid);
                console.log("status "+ res.status+" => Moved Temporarily");
                setTimeout(function(){getExcludedAjax(clanid);}, 100);
            }else{
                console.log("status "+ res.status+" => Unknown Error?");
                setTimeout(function(){getExcludedAjax(clanid);}, 100);
            }
        }
    });
}
