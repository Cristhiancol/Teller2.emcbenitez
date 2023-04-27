let dia = new Date().getDay();
//console.log("Dia: " + dia);
let accion;

switch(dia){
    //Domingo
    case 0:
        accion = "Descansar";
    break;
    case 1:
    case 2:
    case 3:            
    case 4:            
    case 5:
        accion = "Ir a clase de FrontEnd";
        break;  
    case 6:
        accion = "Ir a cine";
        break; 
    default:
        accion = "No se que hacer";                 
}

console.log("Hoy es día " + dia + " y tengo que " + accion);