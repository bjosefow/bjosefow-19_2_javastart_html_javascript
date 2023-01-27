function getTextFromPass(){
    return document.getElementById("pass").value;
}

function getTextFromPassRepeat(){
    return document.getElementById("passRepeat").value;
}

function checkIfPassHasMin8Char(pass){
    return pass.length >= 8;
}

function checkIfPsswordsTheSame(pass, passRepeat){
    return pass === passRepeat;
}

function checkIfPassHasBigLetter(pass) {
    return /[A-Z]/.test(pass);
}

function checkIfPassHasLowerLetter(pass) {
    return /[a-z]/.test(pass);
}

function checkIfPassHasSpecialChar(pass) {
    return /[!"%&]/.test(pass);
}


function getErrorMessage(){
    let pass = getTextFromPass();
    let passRepeat = getTextFromPassRepeat();
    let errorMessage = '';
    if (!checkIfPassHasMin8Char(pass)) {
        errorMessage += 'Za krotkie haslo! Min 8 znakow!'
    }
    if (!checkIfPsswordsTheSame(pass, passRepeat)) {
        errorMessage += 'Hasla sa rozne!'
    }
    if (!checkIfPassHasBigLetter(pass)) {
        errorMessage += 'Wymagana duza litera!'
    }
    if (!checkIfPassHasLowerLetter(pass)) {
        errorMessage += 'Wymagana mala litera!'
    }
    if (!checkIfPassHasSpecialChar(pass)) {
        errorMessage += 'Wymagana znak specjalny!'
    }
    return errorMessage;
}

function addDivWithErrorMessage() {
    // usuniecie tego errorDiva przed kolejna walidacja
    let errorDiv = document.getElementById("validationServer03Feedback");
    if (errorDiv) {
        errorDiv.remove();
    }
    // pobranie diva gdzie bedziemy dodawac errora
    let passDiv = document.getElementById("passRepeatDiv");
    let message = getErrorMessage();
    passDiv.innerHTML += '<div id="validationServer03Feedback" class="invalid-feedback">' + message + '</div>';

    /*let errorMessageDiv = document.createElement("div");
    let idForErrorMessageDiv = document.createAttribute("id");
    idForErrorMessageDiv.value = "validationServer03Feedback";
    let classForErrorMessageDiv = document.createAttribute("class");
    classForErrorMessageDiv.value = "invalid-feedback";
    let errorMessage = document.createTextNode(getErrorMessage());
    errorMessageDiv.appendChild(errorMessage);
    passDiv.appendChild(errorMessageDiv);*/
}

function checkPassword() {
    let input = document.getElementById("pass");
    input.onkeyup = addDivWithErrorMessage;
}

checkPassword(); 
