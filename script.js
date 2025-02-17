let submit = document.querySelector('.submit');
let mail = document.querySelector('#email');
let error = document.querySelector('.error');
let cardOne = document.querySelector('.card-One');
let main = document.querySelector('.main');
let mailSent = document.querySelector('.mailSend');

submit.addEventListener('click', function(e){
    e.preventDefault();
     if(validerEmail(mail.value)){
        mailSent.textContent = mail.value;
        main.style.display = "none";
        cardOne.style.display = "inline";
     } else {
        error.textContent = "valid email required";
        mail.value = "";
     }
});


function validerEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Exemple d'utilisation
const email = "exemple@domaine.com";
if (validerEmail(email)) {
    console.log("E-mail valide");
} else {
    console.log("E-mail invalide");
}
