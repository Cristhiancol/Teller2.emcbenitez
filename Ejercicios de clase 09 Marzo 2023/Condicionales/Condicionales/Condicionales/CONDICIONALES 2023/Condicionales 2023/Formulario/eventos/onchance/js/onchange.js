function validarEmail(){
    let emailInput = document.getElementById("email");
    let email = emailInput.value;

    if(!email.includes("@")){
        alert("El email no es valido");
        emailInput.value = "";
    }

}