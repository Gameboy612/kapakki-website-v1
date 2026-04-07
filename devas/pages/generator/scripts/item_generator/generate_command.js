

function getStats() {
    var x = {};

    for(var i = 0; i < equipment_stats.length; i++) {
        var gearstat = equipment_stats[i].getElementsByClassName("stat");
        for(var j = 0; j < gearstat.length; j++) {
            var stat_div = gearstat[j].getElementsByTagName("input")[0];
            var stat = stat_div.id;
            var stat_path = stat.split(".");
            var value = stat_div.value;
            // set pointer for x
            if(value) {
                function navObj(obj, path = [], i = 0) {
                    if(i >= path.length - 1) {
                        obj[path[i]] = parseInt(value);
                        return false;
                    } else {
                        if(!obj[path[i]]) {obj[path[i]] = {}};
                        navObj(obj[path[i]], path, i + 1)
                    }
                }
                // for(var k = 0; k < stat_path.length; k++) {
                //     k = k[stat_path];
                // }
                navObj(x, stat_path)
                console.log(x)
            }
        }
    }
    return x;
}

function formSubmit() {
    let generator = document.forms["Generator"];

    let cmd = "give @s ";
    cmd += generator["itemtype"].value;

    

    var tag = getStats();
    
    var itemtag = generator["itemtag"].value.replaceAll("\'", "\"").replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2":');

    console.log(itemtag)
    console.log(JSON.parse(itemtag))
    tag = {...tag, ...JSON.parse(generator["itemtag"].value)}
    
    console.log(cmd + JSON.stringify(tag));
    // alert(cmd);
    
}
