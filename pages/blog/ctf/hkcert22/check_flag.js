

function formSubmit() {
    let flag = document.forms["Flag"];

    // Yes, I know this way of storing a flag is insecure, but who cares, you're reading a write-up anyways.
    if(flag["flag_input"].value===document.getElementById('flag').innerHTML) {
        alert('Correct Flag! Congrats!')
    } else {
        alert('Sorry, try again!')
    }
    
}
