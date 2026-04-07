function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}


// ---------------------------------


const template = document.getElementById("stat_template");

function populateStat(ItemType = "Weapon", id = "WeaponDmg") {
    // Create a clone of stat
    var stat = template.content.cloneNode(true);
    
    // Set the label and content
    var label = stat.querySelector('label');
    var content = stat.querySelector('input');

    const stat_path = "Stats." + ItemType + "." + id;

    label.setAttribute('for', stat_path);
    label.innerHTML = id + ":";
    content.setAttribute('id', stat_path);

    document.getElementById(ItemType).appendChild(stat);
}


const geartemplate = document.getElementById("geartype_template");

function populateGearType(ItemType = "Weapon") {
    // Create a clone of stat
    var stat = geartemplate.content.cloneNode(true);
    
    // Set the label and content
    var div = stat.querySelector('.geartype');
    var checkbox = stat.querySelector('.geartype_checkbox');
    var label = stat.querySelector('.geartype_label');

    div.setAttribute('id', ItemType);
    checkbox.setAttribute('id', "is" + ItemType);
    checkbox.setAttribute('name', "is" + ItemType);
    checkbox.setAttribute('onclick', "showhideCheckbox(this.id)");
    label.setAttribute('for', "is" + ItemType);
    label.innerHTML = ItemType;
    document.getElementById("equipment_stats").appendChild(stat);
}






// --------------------------
const item_stats_api = "../scripts/item_generator/_item_setup.json";
var data;

async function getStats() {
    const response = await fetch(item_stats_api);
    data = await response.json();
}
async function populateStats() {
    await getStats();

    const item_types = Object.keys(data.Stats);
    item_types.forEach(item_type => {
        populateGearType(item_type);
        const stat_types = Object.keys(data.Stats[item_type]);
        stat_types.forEach(stat => {
            if(typeof data.Stats[item_type][stat] == 'object') {
                const substat_types = Object.keys(data.Stats[item_type][stat]);
                substat_types.forEach(substat => {
                    populateStat(item_type, stat + "." + substat)
                }

                )
            } else {
                populateStat(item_type, stat);
            }
        })
    })
    loadScript("../scripts/item_generator/show_hide.js");
    loadScript("../scripts/item_generator/generate_command.js");
    
} 

populateStats();