


// function showhideCheckbox(id = "isWeapon") {
//     // Get the checkbox
//     var checkBox = document.getElementById(id);
//     // Get the output text
//     var text = document.getElementById(id.substring(2));
  
//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == true){
//         text.classList.remove("hidden");
//     } else {
//         text.classList.add("hidden");
//     }
// }


const searchInput = document.getElementById("search_bar");
const posts = document.getElementById("posts").getElementsByTagName("a");


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    console.log(value);

    for(var i = 0; i < posts.length; i++) {
        var post = posts[i].getElementsByClassName("text")[0].getElementsByTagName("*");
        posts[i].classList.add("hidden");
        for(var j = 0; j < post.length; j++) {
            if(post[j].innerHTML.toLowerCase().includes(value)) {
                posts[i].classList.remove("hidden");
              }
        }
        }

})