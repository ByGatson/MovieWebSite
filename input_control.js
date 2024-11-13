var loginInputs = document.getElementsByClassName("login-input");
var loginButton = document.getElementById("loginButton");
var registerInputs = document.getElementsByClassName("register-input");
var registerButton = document.getElementById("registerButton");
var rebuildProfilInputs = document.getElementsByClassName("rebuild-profil-input");
var rebuildButton = document.getElementById("rebuildButton");
var userNameInputs = document.getElementsByClassName("user-name-input");
var passwordInputs = document.getElementsByClassName("password-input");
var passwordButton = document.getElementById("passwordButton");
var emailInputs = document.getElementsByClassName("email-input");
var emailButton = document.getElementById("emailButton");
var baseInput = [loginInputs, registerInputs, rebuildProfilInputs, userNameInputs, passwordInputs, emailInputs];
var charColorControl = false;
var nullColorControl = false;
var spaceColorControl = false;

function controlInput(formNumber) {
    if (nullControl(formNumber)) {
        alert("Lütfen boş alan bırakmayın");
        return false;
    } else if (spaceControl(formNumber)) {
        alert("Lütfen boşluk kullanmayın");
        return false;
    } else if (charSubmitControl(formNumber)) {
        alert("Lütfen sadece harf ve rakam kullanın.");
        return false;
    }
    return true;
}

function controlInputForOnChange(formID, index) {
    nullControlForOnChange(formID, index);
    charControl(formID, index);
    spaceControlForOnChange(formID, index);
}

function nullControl(formNumber) {
    var result = false;
    var inputArray = baseInput[formNumber];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].value == "") {
            nullColorControl = true;
            nullControlColor(formNumber, i);
            if (!result) {
                result = true;
            }
        } else {
            nullColorControl = false;
            nullControlColor(formNumber, i);
        }
    }
    return result;
}

function nullControlForOnChange(formNumber, index) {
    var inputArray = baseInput[formNumber];
    if (inputArray[index].value == "") {
        nullColorControl = true;
        nullControlColor(formNumber, index);
    } else {
        nullColorControl = false;
        nullControlColor(formNumber, index);
    }
}

function charSubmitControl(formNumber) {
    var inputArray = baseInput[formNumber];
    for (var i = 0; i < inputArray.length; i++) {
        if (charControl(formNumber, i)) {
            return true;
        }
    }
    return false;
}

function charControl(formNumber, index) {
    var words = baseInput[formNumber][index].value;
    for (var j = 0; j < words.length; j++) {
        var startNum = 33;
        var finishNum = 47;
        while (startNum <= finishNum) {
            if (words.charAt(j) === String.fromCharCode(startNum)) {
                charColorControl = true;
                charControlColor(formNumber, index);
                return true;
            }
            if (startNum == 42) {
                startNum = 58;
                finishNum = 63;
                continue;
            }
            if (startNum == 63) {
                startNum = 91;
                finishNum = 96;
                continue;
            }
            if (startNum == 96) {
                startNum = 123;
                finishNum = 254;
                continue;
            }
            startNum++;
        }

    }
    charColorControl = false;
    charControlColor(formNumber, index);
    return false;
}

function charControlColor(formID, index) {
    var inputArray = baseInput[formID];
    if (charColorControl) {
        inputArray[index].style.boxShadow = "0px 0px 4px red";
    } else {
        if (!nullColorControl) {
            if (!spaceColorControl) {
                inputArray[index].style.boxShadow = "0px 0px 4px green";
            }
        }
    }
}

function nullControlColor(formID, index) {
    var inputArray = baseInput[formID];
    if (nullColorControl) {
        inputArray[index].style.boxShadow = "0px 0px 4px red";
    } else {
        if (!charColorControl) {
            if (!spaceColorControl) {
                inputArray[index].style.boxShadow = "0px 0px 4px green";
            }
        }
    }
}

function spaceControlColor(formID, index) {
    var inputArray = baseInput[formID];
    if (spaceColorControl) {
        inputArray[index].style.boxShadow = "0px 0px 4px red";
    } else {
        if (!charColorControl) {
            if (!nullColorControl) {
                inputArray[index].style.boxShadow = "0px 0px 4px green";
            }
        }
    }
}

function spaceControl(formNumber) {
    var result = false;
    var inputArray = baseInput[formNumber];
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = 0; j < inputArray[i].value.length; j++) {
            if (inputArray[i].value.charAt(j) == " ") {
                spaceColorControl = true;
                spaceControlColor(formNumber, i);
                if (!result) {
                    result = true;
                }
            } else {
                spaceColorControl = false;
                spaceControlColor(formNumber, i);
            }
        }
    }
    return result;
}

function spaceControlForOnChange(formNumber, index) {
    var words = baseInput[formNumber][index].value;
    for (var i = 0; i < words.length; i++) {
        if (words.charAt(i) == " ") {
            spaceColorControl = true;
            spaceControlColor(formNumber, index);
            return;
        }
    }
    spaceColorControl = false;
    spaceControlColor(formNumber, index);
}

function controlInputColor() {
    var userName = document.getElementById("userName");
    if (userName.value != "") {
        userName.style.boxShadow = "0px 0px 10px green";
    }
}