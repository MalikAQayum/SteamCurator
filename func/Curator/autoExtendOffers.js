function autoExtendOffers(clanid){
    if ( $( ".expiration_warning" ).length ) {
        ExtendOffers(clanid.split("-")[0]);
        console.log("Extending offers..");
    }
}