// ==UserScript==
// @name         Steam Curator
// @namespace    https://gist.github.com/MalikAQayum/
// @version      0.1
// @description  Does Curator Stuff.
// @author       MalikQayum
// @connect      api.steampowered.com
// @connect      store.steampowered.com
// @connect      help.steampowered.com
// @connect      steamcommunity.com
// @match        https://store.steampowered.com/curator/*/admin/test
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/lib/Chartjs_v1.1.1.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/lib/jQuery_v1.11.1.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/lib/titleAlert.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/CleanPage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/PCGameitDataContainer.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/pgbar.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/getAcceptedAjax.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/getAcceptedAjax_v2.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/getPendingAjax.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/getExcludedAjax.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/validateStorage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/handleData.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/PCGameitlocalStorage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/ClearlocalStorage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/titleNewAppid.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/PCGameitNewestAppid.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/myCuratorLicenses.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/cChart_v1.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/verSteamCurator.js
// @downloadURL https://github.com/MalikAQayum/SteamCurator/raw/master/SteamCurator.user.js
// @updateURL   https://github.com/MalikAQayum/SteamCurator/raw/master/SteamCurator.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @run-at      document-idle
// ==/UserScript==

GM_addStyle(`
.test00 { color: #ff0099}
.test01 { color: #00ced1}
.test02 { color: #088da5}
.test03 { color: #42c5f4}
.test04 { color: #f2a34f}
.test05 { color: #4bf266}

table.MQStyle { border: 4px solid #555555; background-color: #555555; width: 100%; text-align: center; border-collapse: collapse; }
table.MQStyle td, table.MQStyle th { border: 1px solid #555555; padding: 5px 10px; }
table.MQStyle tbody td { font-size: 12px; font-weight: bold; color: #FFFFFF; }
table.MQStyle thead { background: #398AA4; border-bottom: 10px solid #398AA4; }
table.MQStyle thead th { font-size: 15px; font-weight: bold; color: #FFFFFF; text-align: left; border-left: 2px solid #398AA4;}
table.MQStyle thead th:first-child { border-left: none; }
table.MQStyle tfoot td { font-size: 13px; }
table.MQStyle tfoot .links { text-align: right; }
table.MQStyle tfoot .links a{ display: inline-block; background: #FFFFFF; color: #398AA4; padding: 2px 8px; border-radius: 5px;}

.titleframe.PCGameitLoader { border: 16px solid #f3f3f3; border-radius: 50%; border-top: 16px solid #3498db; width: 120px; height: 120px; margin: auto; -webkit-animation: spin 2s linear infinite; /* Safari */ animation: spin 2s linear infinite;}
/* Safari */
@-webkit-keyframes spin {0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}

`);

(function($) //https://www.sitepoint.com/auto-refresh-div-content-jquery-ajax/
 {
	 CleanPage();
	 localStorage.clear();
    $(document).ready(function(){
		verSteamCurator();
        const timerloop = 30000;
        const clanid = $(location).attr("href").split("/")[4];
        $(".titleframe.PCGameitLoader").show();

        var PCGameitAcceptedAppids = $(".titleframe.PCGameitAcceptedAppids");
        var PCGameitPendingAppids = $(".titleframe.PCGameitPendingAppids");
        var PCGameitExcludedAppids = $(".titleframe.PCGameitExcludedAppids");
        var PCGameit_localStorage = $(".titleframe.PCGameit_localStorage");

        PCGameitDataContainer();
        ClearlocalStorage_0();
        ClearlocalStorage_1();
        titleNewAppid(clanid);
        getAcceptedAjax_v2(clanid);
        PCGameitAcceptedAppids.load(getAcceptedAjax(clanid));
        PCGameitPendingAppids.load(getPendingAjax(clanid));
        PCGameitExcludedAppids.load(getPendingAjax(clanid));
        PCGameit_localStorage.load(PCGameitlocalStorage());
        validateStorage_0();
        validateStorage_1();

        var refreshId = setInterval(function(){
            $(".titleframe.PCGameitLoader").hide();
            myCuratorLicenses();
            ClearlocalStorage_0();
            titleNewAppid(clanid);
            PCGameitAcceptedAppids.load(getAcceptedAjax(clanid));
            PCGameitPendingAppids.load(getPendingAjax(clanid));
            PCGameitExcludedAppids.load(getExcludedAjax(clanid));
            PCGameit_localStorage.load(PCGameitlocalStorage());
            validateStorage_0();
            validateStorage_1();
            pgbar(timerloop);
        }, timerloop);
    });
})(jQuery);