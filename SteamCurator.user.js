// ==UserScript==
// @name         Steam Curator
// @namespace    https://malikaqayum.github.io/SteamCurator/
// @version      0.5
// @description  Does Curator Stuff.
// @author       MalikQayum
// @connect      api.steampowered.com
// @connect      store.steampowered.com
// @connect      help.steampowered.com
// @connect      steamcommunity.com
// @match        https://store.steampowered.com/curator/*/admin/
// @match        https://store.steampowered.com/curator/*/admin/livestat
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/lib/Chartjs_v1.1.1.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/lib/jQuery_v1.11.1.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/lib/titleAlert.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/CleanPage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/livestat.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/PCGameitDataContainer.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/pgbar.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/getAcceptedAjax.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/getAcceptedAjax_v2.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Shared/getPendingAjax.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Shared/getExcludedAjax.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/validateStorage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/handleData.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/PCGameitlocalStorage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/ClearlocalStorage.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/titleNewAppid.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/PCGameitNewestAppid.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/myCuratorLicenses.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Curator/cChart_v1.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Shared/verSteamCurator.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Store/validateStorage_2.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamCurator/master/func/Store/handleStoreData.js
// @downloadURL https://github.com/MalikAQayum/SteamCurator/raw/master/SteamCurator.user.js
// @updateURL   https://github.com/MalikAQayum/SteamCurator/raw/master/SteamCurator.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @run-at      document-idle
// ==/UserScript==

if (/store.steampowered.com\/app/.test(window.location.href)){
    localStorage.removeItem('store_pAppids');
    localStorage.removeItem('store_eAppids');
    const clanid="33779114-pcgameit";
    getPendingAjax(1,clanid);
    getExcludedAjax(1,clanid);
    validateStorage_2(clanid);
}

var re_admin = new RegExp(/admin/);
if(document.URL.match(re_admin))
{
    livestat($J(location).attr("href").split("/")[4]);
}

if (/\/admin\/livestat/.test(window.location.href)){
    CleanPage();
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

    (function($)
     {
        $(document).ready(function(){
            localStorage.clear();
            ClearlocalStorage_0();
            ClearlocalStorage_1();

            const timerloop = 30000;
            const clanid = $(location).attr("href").split("/")[4];
            $(".titleframe.PCGameitLoader").show();

            PCGameitDataContainer();
            titleNewAppid(clanid);
            getAcceptedAjax_v2(clanid);
            getAcceptedAjax(clanid);
            getPendingAjax(0,clanid);
            getExcludedAjax(0,clanid);
            PCGameitlocalStorage();

            var refreshId = setInterval(function(){
                $(".titleframe.PCGameitLoader").hide();
                myCuratorLicenses();
                ClearlocalStorage_0();
                titleNewAppid(clanid);
                getAcceptedAjax(clanid);
                getPendingAjax(0,clanid);
                getExcludedAjax(0,clanid);
                PCGameitlocalStorage();
                validateStorage_0();
                validateStorage_1();
                pgbar(timerloop);
            }, timerloop);
        });
    })(jQuery);
}
