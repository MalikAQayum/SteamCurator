function verSteamCurator(){
    var sc_Version = GM_info.script.version, sc_Name = GM_info.script.name, sc_Author = GM_info.script.author, sc_Namespace = GM_info.script.namespace;
    console.log ('%c '+sc_Name + ': v'+sc_Version + ' by '+sc_Author, 'background: grey; color: white; display: block;', sc_Namespace);
}