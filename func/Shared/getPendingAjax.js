function getPendingAjax(option,clanid){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/curator/"+clanid+"/admin/pending?ajax=1",
        onreadystatechange: function(res) {
            //console.log("readyState changed to: " + res.readyState);
        },
        onload: function(res) {
            if(res.status === 200){
                localStorage.setItem('pSource',res.responseText);
                console.log("status "+ res.status+" => Success");
                var pendingappids = res.responseText.match(/app-ctn-[0-9]*"/g);
                for(var i=0; i < pendingappids.length; i++) {
                    pendingappids[i] = pendingappids[i].replace(/app-ctn-/g, '').replace(/"/g, '');
                }
                if(option === 0){
                    GM.setValue("pAppids", JSON.stringify(pendingappids.length));
                    //localStorage.setItem('pAppids',pendingappids.length);
                }else if(option === 1){
                    GM.setValue("store_pAppids", JSON.stringify(pendingappids));
                    //localStorage.setItem('store_pAppids',pendingappids);
                }else{
                }
            }else if(res.status === 500){
                console.log("status "+ res.status+" => Internal Server Error");
                setTimeout(function(){getPendingAjax(option,clanid);}, 100);
            }else if(res.status === 302){
                console.log("status "+ res.status+" => Moved Temporarily");
                setTimeout(function(){getPendingAjax(option,clanid);}, 100);
            }else{
                console.log("status "+ res.status+" => Unknown Error?");
                setTimeout(function(){getPendingAjax(option,clanid);}, 100);
            }
        }
    });
}
