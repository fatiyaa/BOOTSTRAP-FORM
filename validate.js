function emailCheck() {
    let email = document.getElementById("email");

    if (email.value.match(/[\w\d\.]+@\w+\..+/)){
        email.style.borderColor = goodColor;
    } else {
        email.style.borderColor = badColor;
    }
}

function passCheck() {
    let pass = document.getElementById('password');

    if (pass.length < 8) {
        pass.style.borderColor = badColor;
    }
    else {
        pass.ATTRIBUTE_NODEstyle.borderColor = badColor;
    }
}