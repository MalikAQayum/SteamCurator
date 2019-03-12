function validateStorage_2(clanid){
    if ((localStorage.getItem("store_pAppids") !== null) &&
        (localStorage.getItem("store_eAppids") !== null)){
        var sourcePages = localStorage.getItem("store_pAppids").concat(","+localStorage.getItem("store_eAppids"));
        handleStoreData(clanid,sourcePages);
    }else{
        setTimeout(function(){validateStorage_2(clanid);}, 150);
    }
}