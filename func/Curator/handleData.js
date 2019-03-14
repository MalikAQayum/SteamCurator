function handleData(sourcePages){
    console.log(sourcePages);
    var re_copy = /(.*offered\s+)(.*)(\s+copy.*)/g;
    var re_copies = /(offered)(.*)(copies)/g;
    var pe_copy = sourcePages.match(re_copy);
    var pe_copies = sourcePages.match(re_copies);
    console.log(pe_copies + " : " + pe_copy);

    pe_copies = pe_copies.map(function(item){
        return item.replace('offered ', '').replace(' copies', '');
    });

    for(var i=0; i<pe_copies.length;i++) {
        pe_copies[i] = parseInt(pe_copies[i], 10);
    }
    let pe_copies_count = eval(pe_copies.join('+')) + pe_copy.length;

    var appids = sourcePages.match(/app-ctn-[0-9]*"/g);

    for(var j=0; j < appids.length; j++) {
        appids[j] = appids[j].replace(/app-ctn-/g, '');
    }
    GM.setValue("peCopies", pe_copies_count);
    GM.setValue("UniqueAppids", appids.length);
    //localStorage.setItem('peCopies',pe_copies_count);
    //localStorage.setItem('UniqueAppids',appids.length);
}
