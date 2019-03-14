/*localStorage
function PCGameitlocalStorage(){
    if ((localStorage.getItem("peCopies") !== null) && (localStorage.getItem("UniqueAppids") !== null)) {
        if (localStorage.getItem("aAppids") !== null){
            if ($J(".titleframe.PCGameitDataContainer")[0]){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th><th class="test05">`+"Accepted"+`</th></tr><tr><td>`+localStorage.getItem("peCopies")+`</td><td>`+localStorage.getItem("UniqueAppids")+`</td><td>`+localStorage.getItem("pAppids")+`</td><td>`+localStorage.getItem("eAppids")+`</td><td>`+localStorage.getItem("aAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }else{
                    $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th><th class="test05">`+"Accepted"+`</th></tr><tr><td>`+localStorage.getItem("peCopies")+`</td><td>`+localStorage.getItem("UniqueAppids")+`</td><td>`+localStorage.getItem("pAppids")+`</td><td>`+localStorage.getItem("eAppids")+`</td><td>`+localStorage.getItem("aAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }
            } else {
                $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th><th class="test05">`+"Accepted"+`</th></tr><tr><td>`+localStorage.getItem("peCopies")+`</td><td>`+localStorage.getItem("UniqueAppids")+`</td><td>`+localStorage.getItem("pAppids")+`</td><td>`+localStorage.getItem("eAppids")+`</td><td>`+localStorage.getItem("aAppids")+`</td></tr></tbody></table>`);
                cChart_v1();
            }
        }else{
            if ($J(".titleframe.PCGameitDataContainer")[0]){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th></tr><tr><td>`+localStorage.getItem("peCopies")+`</td><td>`+localStorage.getItem("UniqueAppids")+`</td><td>`+localStorage.getItem("pAppids")+`</td><td>`+localStorage.getItem("eAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }else{
                    $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th></tr><tr><td>`+localStorage.getItem("peCopies")+`</td><td>`+localStorage.getItem("UniqueAppids")+`</td><td>`+localStorage.getItem("pAppids")+`</td><td>`+localStorage.getItem("eAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }
            } else {
                $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th></tr><tr><td>`+localStorage.getItem("peCopies")+`</td><td>`+localStorage.getItem("UniqueAppids")+`</td><td>`+localStorage.getItem("pAppids")+`</td><td>`+localStorage.getItem("eAppids")+`</td></tr></tbody></table>`);
                cChart_v1();
            }
        }
    }else{
        setTimeout(function(){PCGameitlocalStorage();}, 150);
    }
}
*/
//GM
function PCGameitlocalStorage(){
    if ((GM.setValue("peCopies") !== null) && (GM.setValue("UniqueAppids") !== null)) {
        if (GM.setValue("aAppids") !== null){
            if ($J(".titleframe.PCGameitDataContainer")[0]){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th><th class="test05">`+"Accepted"+`</th></tr><tr><td>`+GM.setValue("peCopies")+`</td><td>`+GM.setValue("UniqueAppids")+`</td><td>`+GM.setValue("pAppids")+`</td><td>`+GM.setValue("eAppids")+`</td><td>`+GM.setValue("aAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }else{
                    $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th><th class="test05">`+"Accepted"+`</th></tr><tr><td>`+GM.setValue("peCopies")+`</td><td>`+GM.setValue("UniqueAppids")+`</td><td>`+GM.setValue("pAppids")+`</td><td>`+GM.setValue("eAppids")+`</td><td>`+GM.setValue("aAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }
            } else {
                $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th><th class="test05">`+"Accepted"+`</th></tr><tr><td>`+GM.setValue("peCopies")+`</td><td>`+GM.setValue("UniqueAppids")+`</td><td>`+GM.setValue("pAppids")+`</td><td>`+GM.setValue("eAppids")+`</td><td>`+GM.setValue("aAppids")+`</td></tr></tbody></table>`);
                cChart_v1();
            }
        }else{
            if ($J(".titleframe.PCGameitDataContainer")[0]){
                if ($J(".titleframe.PCGameit_localStorage")[0]){
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th></tr><tr><td>`+GM.setValue("peCopies")+`</td><td>`+GM.setValue("UniqueAppids")+`</td><td>`+GM.setValue("pAppids")+`</td><td>`+GM.setValue("eAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }else{
                    $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                    $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th></tr><tr><td>`+GM.setValue("peCopies")+`</td><td>`+GM.setValue("UniqueAppids")+`</td><td>`+GM.setValue("pAppids")+`</td><td>`+GM.setValue("eAppids")+`</td></tr></tbody></table>`);
                    cChart_v1();
                }
            } else {
                $J( ".titleframe.PCGameitDataContainer" ).prepend( "<div class=\"titleframe PCGameit_localStorage\"></div><br>" );
                $J('.titleframe.PCGameit_localStorage').html('<span class="test00"><center>'+new Date()+`</center><table class="MQStyle"><tbody><tr><th class="test01">`+"Total Copies"+`</th><th class="test02">`+"Total Appids"+`</th><th class="test03">`+"Pending"+`</th><th class="test04">`+"Excluded"+`</th></tr><tr><td>`+GM.setValue("peCopies")+`</td><td>`+GM.setValue("UniqueAppids")+`</td><td>`+GM.setValue("pAppids")+`</td><td>`+GM.setValue("eAppids")+`</td></tr></tbody></table>`);
                cChart_v1();
            }
        }
    }else{
        setTimeout(function(){PCGameitlocalStorage();}, 150);
    }
}
