function myCuratorLicenses(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/account/licenses/?l=english",
        onload: function(res) {
            var licenses = res.responseText;
            var arr = [];
            licenses.replace(/\((.*?)\) - complimentary/g, function(s, match) {
                arr.push(match.trim());
            });
            arr = arr.toString().split(",");

            if(arr.length === 0){
                //do nothing.
            }else if(arr.length === 1){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    if ($J(".titleframe.PCGameit_myCuratorClaims")[0]){
                        $J('.titleframe.PCGameit_myCuratorClaims').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"My Curator Package Claims: "+arr.length+`</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[0]+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[0]+'/capsule_231x87.jpg" width="90%"></a>'+`</th></tbody></table>`);
                    }else{
                        $J( ".titleframe.PCGameitDataContainer" ).append( "<div class=\"titleframe PCGameit_myCuratorClaims\"></div><br>" );
                        $J('.titleframe.PCGameit_myCuratorClaims').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"My Curator Package Claims: "+arr.length+`</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[0]+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[0]+'/capsule_231x87.jpg" width="90%"></a>'+`</th></tbody></table>`);
                    }
                }else{
                    //do nothing.
                }
            }else if(arr.length === 2){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    if ($J(".titleframe.PCGameit_myCuratorClaims")[0]){
                        $J('.titleframe.PCGameit_myCuratorClaims').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"My Curator Package Claims: "+arr.length+`</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[0]+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[0]+'/capsule_231x87.jpg" width="90%"></a>'+`</th><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[1]+'"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[1]+'/capsule_231x87.jpg" width="90%"></a>'+`</th></tbody></table>`);
                    }else{
                        $J( ".titleframe.PCGameitDataContainer" ).append( "<div class=\"titleframe PCGameit_myCuratorClaims\"></div><br>" );
                        $J('.titleframe.PCGameit_myCuratorClaims').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"My Curator Package Claims: "+arr.length+`</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[0]+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[0]+'/capsule_231x87.jpg" width="90%"></a>'+`</th><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[1]+'"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[1]+'/capsule_231x87.jpg" width="90%"></a>'+`</th></tbody></table>`);
                    }
                }else{
                    //do nothing.
                }
            }else if(arr.length == 3){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    if ($J(".titleframe.PCGameit_myCuratorClaims")[0]){
                        $J('.titleframe.PCGameit_myCuratorClaims').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"My Curator Package Claims: "+arr.length+`</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[0]+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[0]+'/capsule_231x87.jpg" width="90%"></a>'+`</th><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[1]+'"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[1]+'/capsule_231x87.jpg" width="90%"></a>'+`</th><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[2]+'"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[2]+'/capsule_231x87.jpg" width="90%"></a>'+`</th></tbody></table>`);
                    }else{
                        $J( ".titleframe.PCGameitDataContainer" ).append( "<div class=\"titleframe PCGameit_myCuratorClaims\"></div><br>" );
                        $J('.titleframe.PCGameit_myCuratorClaims').html(`<table class="MQStyle"><tbody><tr><th class="test01">`+"My Curator Package Claims: "+arr.length+`</th></tr></tbody></table>` + `<table class="MQStyle"><tbody><tr><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[0]+'" target="_blank"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[0]+'/capsule_231x87.jpg" width="90%"></a>'+`</th><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[1]+'"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[1]+'/capsule_231x87.jpg" width="90%"></a>'+`</th><th class="test01">`+'<a href="https://store.steampowered.com/app/'+arr[2]+'"><img src="https://steamcdn-a.akamaihd.net/steam/apps/'+arr[2]+'/capsule_231x87.jpg" width="90%"></a>'+`</th></tbody></table>`);
                    }
                }else{
                    //do nothing.
                }
            }else{
                //do nothing
            }
        }
    });
}