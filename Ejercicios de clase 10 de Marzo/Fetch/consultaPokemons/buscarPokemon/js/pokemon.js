function buscarPokemon() {
	// Obtener el valor del input
	const pokemon = document.getElementById("pokemonName").value;
	// Obtener el elemento donde se mostrará el resultado
  	const resultado = document.getElementById("resultado");
	resultado.innerHTML = "";
	// Llamar a la API
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
	  .then(response => response.json())
	  .then(data => {		
		// Crear el elemento donde se mostrará el nombre
      	const nombre = document.createElement("p");
		// Agregar el nombre al elemento
      	nombre.innerText = data.name;
		// Agregar el elemento al resultado
      	resultado.appendChild(nombre);

		// Crear el elemento donde se mostrará la imagen
      	const imagen = document.createElement("img");
		// Agregar la imagen al elemento
      	imagen.src = data.sprites.back_default;
		// Agregar el elemento al resultado
      	resultado.appendChild(imagen);
    })
	  .catch(error => console.error(error));
}