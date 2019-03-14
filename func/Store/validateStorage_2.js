function validateStorage_2(){
    var clanid=localStorage.getItem("myclanid");
    if ((localStorage.getItem("store_pAppids") !== null) &&
        (localStorage.getItem("store_eAppids") !== null)){
        var sourcePages = localStorage.getItem("store_pAppids").concat(","+localStorage.getItem("store_eAppids"));
        handleStoreData(sourcePages);
    }else{
        setTimeout(function(){validateStorage_2();}, 150);
    }
}
