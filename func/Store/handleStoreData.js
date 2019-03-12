function handleStoreData(clanid,sourcePages){
    sourcePages = sourcePages.split(",");
    var peAppid = sourcePages.includes($J(location).attr("href").split("/")[4]);
    if (peAppid === true){
        if ($J(".btn_addtocart")[0]){
            $J( ".btn_addtocart" ).append( '<a class="btnv6_blue_hoverfade btn_medium" href="https://store.steampowered.com/curator/'+clanid+'/admin/pending"><span>Add through Curator</span></a>' );
        } else {
            //
        }
    }
}