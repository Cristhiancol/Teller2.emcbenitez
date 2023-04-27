/*let numero = 5;

if(numero > 0 && numero < 10){
    console.log("El nÃºmero es mayor que 0 y menor que 10");
}

if(numero > 0 || numero < 10){
    console.log("El nÃºmero es mayor que 0 o menor que 10");
}*/

/*let contrasena = "7110eda4d09e062aa5e4a390b0a572ac0d2c0220";

if(contrasena == "7110eda4d09e062aa5e4a390b0a572ac0d2c0220"){
    console.log("La contraseÃ±a es correcta");
}else{
    console.log("La contraseÃ±a es incorrecta");
}*/

/*let numero = 20;

if(numero % 2 == 0){
    console.log("El nÃºmero es par");
}else{
    console.log("El nÃºmero es impar");
}*/

let hora = new Date().getHours();

if(hora >= 6 && hora <= 18){
    console.log("Habilitar pagina web");
}else if(hora > 18 && hora < 24){
    console.log("Solucionando inconvenientes");
}else{
    console.log("Pagina web fuera de servicio");
}