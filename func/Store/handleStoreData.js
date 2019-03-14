function handleStoreData(clanid,sourcePages){
    console.log("handleStoreData begin");
    sourcePages = sourcePages.split(",");
    var peAppid = sourcePages.includes($J(location).attr("href").split("/")[4]);
    console.log(peAppid);
    if (peAppid === true){
        if ($J(".btn_addtocart")[0]){
            console.log("btn_addtocart 01 true");
            $J( ".btn_addtocart:first" ).append( '<a class="btnv6_blue_hoverfade btn_medium" href="https://store.steampowered.com/curator/'+clanid+'/admin/pending"><span>Add through Curator</span></a>' );
        } else {
            console.log("btn_addtocart 01 false");
            $J( "#game_area_purchase > div.game_area_comingsoon.game_area_bubble > div > p" ).append( '<a class="btnv6_blue_hoverfade btn_medium" href="https://store.steampowered.com/curator/'+clanid+'/admin/pending" style="float: right;"><span>Add through Curator</span></a>' );
        }
    }else{
        console.log("handleStoreData 00 error");
    }
}
