/* localStorage
function validateStorage_0(){
    if ((localStorage.getItem("eSource") !== null) &&
        (localStorage.getItem("pSource") !== null) &&
        (localStorage.getItem("pAppids") !== null) &&
        (localStorage.getItem("eAppids") !== null)){
        var sourcePages = localStorage.getItem("pSource").concat(localStorage.getItem("eSource"));
        handleData(sourcePages);
    }else{
        setTimeout(function(){validateStorage_0();}, 150);
    }
}

function validateStorage_1(){
    if ((localStorage.getItem("eSource") !== null) &&
        (localStorage.getItem("pSource") !== null) &&
        (localStorage.getItem("aAppids") !== null)){
        var sourcePages = localStorage.getItem("pSource").concat(localStorage.getItem("eSource"));
        handleData(sourcePages);
    }else{
        setTimeout(function(){validateStorage_1();}, 150);
    }
}
*/
//GM
function validateStorage_0(){
    if ((GM.getValue("eSource") !== null) &&
        (GM.getValue("pSource") !== null) &&
        (GM.getValue("pAppids") !== null) &&
        (GM.getValue("eAppids") !== null)){
        var sourcePages = GM.getValue("pSource").concat(GM.getValue("eSource"));
        handleData(sourcePages);
    }else{
        setTimeout(function(){validateStorage_0();}, 150);
    }
}

function validateStorage_1(){
    if ((GM.getValue("eSource") !== null) &&
        (GM.getValue("pSource") !== null) &&
        (GM.getValue("aAppids") !== null)){
        var sourcePages = GM.getValue("pSource").concat(GM.getValue("eSource"));
        handleData(sourcePages);
    }else{
        setTimeout(function(){validateStorage_1();}, 150);
    }
}
