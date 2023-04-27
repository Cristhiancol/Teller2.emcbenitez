function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if(nombre == '' || email == '' || mensaje == ''){
        alert('Debe completar todos los campos');
    }else{
        alert('Formulario enviado');
        //document.getElementById('formulario').submit();
    }
}