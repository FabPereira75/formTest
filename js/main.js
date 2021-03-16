const formInscription = document.getElementById("inscription");
const champAge = formInscription.elements["age"];
const champPrenom = formInscription.elements["prenom"];
const errorMsg = document.getElementById("error");

function valider (e) {
    if(isNaN(champAge.value)) {
        errorMsg.classList.add("showDivError");
    } else {
        
    }
}



formInscription.addEventListener('submit', valider);