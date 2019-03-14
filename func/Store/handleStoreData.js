function handleStoreData(sourcePages){
    var clanid=localStorage.getItem("myclanid");
    sourcePages = sourcePages.split(",");
    var peAppid = sourcePages.includes($J(location).attr("href").split("/")[4]);
    console.log(peAppid);
    if (peAppid === true){
        if ($J(".btn_addtocart")[0]){
            $J( ".btn_addtocart" ).append( '<a class="btnv6_blue_hoverfade btn_medium" href="https://store.steampowered.com/curator/'+clanid+'/admin/pending"><span>Add through Curator</span></a>' );
        } else {
            $J( "#game_area_purchase > div.game_area_comingsoon.game_area_bubble > div > p" ).append( '<a class="btnv6_blue_hoverfade btn_medium" href="https://store.steampowered.com/curator/'+clanid+'/admin/pending" style="float: right;"><span>Add through Curator</span></a>' );
        }
    }
}
