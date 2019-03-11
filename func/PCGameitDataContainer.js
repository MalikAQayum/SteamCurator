function PCGameitDataContainer(){
    if ($J(".admin_content")[0]){
        if ($J(".titleframe.PCGameitDataContainer")[0]){
        }else{
            $J( ".admin_content" ).prepend( "<div class=\"titleframe PCGameitDataContainer\"></div><br><div class=\"titleframe PCGameitLoader\"></div><br>" );
        }
    } else {
        $J( ".darkframe" ).prepend( "<div class=\"titleframe PCGameitDataContainer\"></div><br>" );
    }
}