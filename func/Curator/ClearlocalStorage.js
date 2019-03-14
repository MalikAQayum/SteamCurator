/* localStorage
function ClearlocalStorage_0(){
    localStorage.removeItem('peCopies');
    localStorage.removeItem('UniqueAppids');
    localStorage.removeItem('eSource');
    localStorage.removeItem('pSource');
    localStorage.removeItem('pAppids');
    localStorage.removeItem('eAppids');
}
function ClearlocalStorage_1(){
    localStorage.clear();
    localStorage.removeItem('aAppids');
    localStorage.removeItem('r3o_old');
}
*/
//GM
function ClearlocalStorage_0(){
    GM.deleteValue('peCopies');
    GM.deleteValue('UniqueAppids');
    GM.deleteValue('eSource');
    GM.deleteValue('pSource');
    GM.deleteValue('pAppids');
    GM.deleteValue('eAppids');
}
function ClearlocalStorage_1(){
    GM.deleteValue('peCopies');
    GM.deleteValue('UniqueAppids');
    GM.deleteValue('eSource');
    GM.deleteValue('pSource');
    GM.deleteValue('pAppids');
    GM.deleteValue('eAppids');
    GM.deleteValue("aAppids");
    GM.deleteValue("r3o_old");
}
