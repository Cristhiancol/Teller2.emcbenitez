function buscarPokemon() {
	const pokemon = document.getElementById("pokemonName").value;
    
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
	  .then(response => response.json())
	  .then(data => console.log(data))
	  .catch(error => console.error(error));
}
 