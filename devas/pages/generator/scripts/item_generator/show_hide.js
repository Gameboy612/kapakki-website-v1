


function showhideCheckbox(id = "isWeapon") {
    // Get the checkbox
    var checkBox = document.getElementById(id);
    // Get the output text
    var text = document.getElementById(id.substring(2));
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.classList.remove("hidden");
    } else {
        text.classList.add("hidden");
    }
}


const searchInput = document.getElementById("search_stats");
const equipment_stats = document.getElementById("equipment_stats").getElementsByClassName("geartype");


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    console.log(value);

    for(var i = 0; i < equipment_stats.length; i++) {
        var gearstat = equipment_stats[i].getElementsByClassName("stat");
        for(var j = 0; j < gearstat.length; j++) {
            console.log(gearstat[j])
            if(gearstat[j].getElementsByTagName("label")[0].innerHTML.toLowerCase().includes(value)) {
				gearstat[j].classList.remove("hidden");
          	} else {
				gearstat[j].classList.add("hidden");

			}
        }
    }
})