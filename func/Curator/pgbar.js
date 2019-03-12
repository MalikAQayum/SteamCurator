function pgbar(timerloop){
    GM_addStyle(`
		.PCGameitReloadBar {width: calc(100% - 0px); height: 5px; background: #e0e0e0; padding: 3px; border-radius: 3px; box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);}
		.PCGameitReloadBar-fill {display: block; height: 5px; background: #659cef; border-radius: 3px; transition: width `+parseInt(timerloop.toString().slice(0,2))+`s ease-in-out;}
	`);
    if ($J(".PCGameitReloadBar-fill")[0]){
        $J( ".PCGameitReloadBar-fill" ).remove();
         $J( ".PCGameitReloadBar" ).append('<span class="PCGameitReloadBar-fill" style="width: 0%"></span>');
        $J('.PCGameitReloadBar-fill').delay(1000).queue(function () {
            $J(this).css("width","100%");
        });
    }else{
        $J( ".admin_content" ).prepend( '<div class="PCGameitReloadBar"><span class="PCGameitReloadBar-fill" style="width: 0%"></span></div>' );
        $J('.PCGameitReloadBar-fill').delay(1000).queue(function () {
            $J(this).css("width","100%");
        });
    }
}