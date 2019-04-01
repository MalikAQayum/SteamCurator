function PCGameitNewestAppid(appid){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/api/appdetails/?appids="+appid,
        onreadystatechange: function(res) {
            //console.log("readyState changed to: " + res.readyState);
        },
        onload: function(res) {
            if(res.status === 200){
                var appdetails = JSON.parse(res.responseText);
                var type = appdetails[appid]['data']['type'];
                var short_description = appdetails[appid]['data']['short_description'];
                var name = appdetails[appid]['data']['name'];

                if ($J(".admin_content")[0]){
                    if ($J(".titleframe.PCGameitNewestAppid")[0]){
                        $J('.titleframe.PCGameitNewestAppid').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"Latest Recieved Curator Package: "+ appid + `</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01" width="47%">`+'<a href="https://store.steampowered.com/app/'+appid+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+appid+'/capsule_231x87.jpg" width="95%"></a>'+`</th><th width="47%">`+name + '<br>'+ short_description+`</th></tr></tbody></table>`);
                    }else{
                        $J( ".admin_content" ).prepend( "<div class=\"titleframe PCGameitNewestAppid\"></div><br>" );
                        $J('.titleframe.PCGameitNewestAppid').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"Latest Recieved Curator Package: "+ appid + `</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01" width="47%">`+'<a href="https://store.steampowered.com/app/'+appid+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+appid+'/capsule_231x87.jpg" width="95%"></a>'+`</th><th width="47%">`+name + '<br>'+ short_description+`</th></tr></tbody></table>`);
                    }
                } else {
                    $J( ".darkframe" ).prepend( "<div class=\"titleframe PCGameitNewestAppid\"></div><br>" );
                    $J('.titleframe.PCGameitNewestAppid').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"Latest Recieved Curator Package: "+ appid + `</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01" width="47%">`+'<a href="https://store.steampowered.com/app/'+appid+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+appid+'/capsule_231x87.jpg" width="95%"></a>'+`</th><th width="47%">`+name + '<br>'+ short_description+`</th></tr></tbody></table>`);
                }

            }else if(res.status === 500){
                console.log("status "+ res.status+" => Internal Server Error");
                setTimeout(function(){PCGameitNewestAppid(appid);}, 100);
            }else{
                console.log("status "+ res.status+" => Unknown Error?");
                setTimeout(function(){PCGameitNewestAppid(appid);}, 100);
            }
        }
    });
}