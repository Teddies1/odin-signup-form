verifyPW = () => {
    va
    console.log("Test");
    var passValue = document.getElementById("user_password").value;
    var confpassValue = document.getElementById("confirm_password").value;
    // the typeof operator returns a string.
    if(typeof nameValue !== "string") {
        return window.alert("Please re-enter your name");
    // we use strict validation ( !== ) because it's a good practice.
    }
    else if (passValue !== confpassValue) {
       window.alert("Passwords do not match!");
       return false;
    }
    return true;
}

// verifyPW();