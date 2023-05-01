function ocultarMostrarElemento(){
    let elemento = document.getElementById("texto");

    if(elemento.style.display == "none"){
        elemento.style.display = "block";
    }else{
        elemento.style.display = "none";
    }
}