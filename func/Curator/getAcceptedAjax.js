function getAcceptedAjax(clanid){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/curator/"+clanid+"/admin/accepted?ajax=1",
        headers: {
            "Upgrade-Insecure-Requests": 1,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"
        },
        onreadystatechange: function(res) {
            //console.log("readyState changed to: " + res.readyState);
        },
        onload: function(res) {
            if(res.status === 200){
                console.log("status "+ res.status+" => Success");
                var acceptedappids = res.responseText.match(/app-ctn-[0-9]*"/g);
                for(var i=0; i < acceptedappids.length; i++) {
                    acceptedappids[i] = acceptedappids[i].replace(/app-ctn-/g, '').replace(/"/g, '');
                }
                localStorage.setItem('aAppids',acceptedappids.length);
            }else if(res.status === 500){
                console.log("status "+ res.status+" => Internal Server Error");
                setTimeout(function(){getAcceptedAjax(clanid);}, 100);
            }else if(res.status === 302){
                console.log("status "+ res.status+" => Moved Temporarily");
                setTimeout(function(){getAcceptedAjax(clanid);}, 100);
            }else{
                console.log("status "+ res.status+" => Unknown Error?");
                setTimeout(function(){getAcceptedAjax(clanid);}, 100);
            }
        }
    });
}