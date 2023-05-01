
fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
    .then(response => response.json())
    .then(data => {
      crearTabla(data);
    })
    .catch(error => console.error(error));


function crearTabla(data)
{
    const pokemonArray = data.results;
    // Crear la tabla
    const table = document.createElement('table');
    // Crear la cabecera
    const tableHeader = document.createElement('tr');
    // Crear las columnas de la cabecera
    const idHeader = document.createElement('th');
    const nameHeader = document.createElement('th');
    const urlHeader = document.createElement('th');
    // Agregar los textos a las columnas
    idHeader.innerText = "ID";
    nameHeader.innerText = "Name";
    urlHeader.innerText = "URL";
    // Agregar las columnas a la cabecera
    tableHeader.appendChild(idHeader);
    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(urlHeader);
    // Agregar la cabecera a la tabla
    table.appendChild(tableHeader);
    
    for (let i = 0; i < pokemonArray.length; i++) {
      
      // Crear una fila
      const pokemonRow = document.createElement('tr');
      // Crear las columnas
      const idData = document.createElement('td');
      const nameData = document.createElement('td');
      const urlData = document.createElement('td');
      // Agregar los datos a las columnas
      idData.innerText = i + 1;
      nameData.innerText = pokemonArray[i].name;
      urlData.innerHTML = `<a href="${pokemonArray[i].url}" target="_blank">Ver</a>`;
      // Agregar las columnas a la fila
      pokemonRow.appendChild(idData);
      pokemonRow.appendChild(nameData);
      pokemonRow.appendChild(urlData);
      // Agregar la fila a la tabla
      table.appendChild(pokemonRow);
    }

    // Agregar la tabla al body
    document.body.appendChild(table);
  
}