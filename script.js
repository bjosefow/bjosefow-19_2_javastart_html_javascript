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
    let errorDiv = document.getElementById("validationServer03Feedback");
    removeOldErrorMessage(errorDiv);

    let passDiv = document.getElementById("passRepeatDiv");
    let message = getErrorMessage();
    //roziazanie 1
    //passDiv.innerHTML += '<div id="validationServer03Feedback" class="invalid-feedback">' + message + '</div>';

    //rozwiazanie 2 -> tworzace diva
    let errorMessageDiv = document.createElement("div");
    let idForErrorMessageDiv = document.createAttribute("id");
    idForErrorMessageDiv.value = "validationServer03Feedback";
    let classForErrorMessageDiv = document.createAttribute("class");
    classForErrorMessageDiv.value = "invalid-feedback";
    let errorMessage = document.createTextNode(getErrorMessage());
    
    errorMessageDiv.setAttributeNode(classForErrorMessageDiv);
    errorMessageDiv.setAttributeNode(idForErrorMessageDiv);
    errorMessageDiv.appendChild(errorMessage);
    passDiv.appendChild(errorMessageDiv);
}

function removeOldErrorMessage(errorDiv){
    if (errorDiv) {
        errorDiv.remove();
    }
}

function checkPassword() {
    let inputPass = document.getElementById("pass");
    let inputPassRepeat = document.getElementById("passRepeat");
    inputPass.onkeyup = addDivWithErrorMessage;
    inputPassRepeat.onkeyup = addDivWithErrorMessage;
}

checkPassword(); 
