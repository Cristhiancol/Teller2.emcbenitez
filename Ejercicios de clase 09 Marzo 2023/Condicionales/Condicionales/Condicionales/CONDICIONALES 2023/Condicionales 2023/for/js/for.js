/*for(let i = 1; i <= 10; i++){
    console.log("i: " + i);
}*/

let table = document.getElementById("tabla");

//let table = document.getElementsByTagName("table")[1];
//console.log(table);
for( let i = 1; i <= 30; i++){
    let newRow = table.insertRow();
    let columna1 = newRow.insertCell(0);
    let columna2 = newRow.insertCell(1);
    columna1.innerHTML = `5 X ${i}`;
    columna2.innerHTML = 5 * i;
}

let multiplicar = 1;

for( let i = 1; i <= 10; i++){
    multiplicar *= i;
    console.log("Cuando i vale " + i + " multiplicar vale: " + multiplicar);    
}

console.log("multiplicar total: " + multiplicar);