
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

/* fetch('https://pokeapi.co/api/v2/pokemon/6')
  .then(response => response.json())
  .then(data => {
    var imageUrl = data.sprites.back_default;
    const pokemon = document.createElement('img');
    const pokemonName = document.createElement('h1');
    pokemonName.textContent = `This is  ${data.name}`;
    pokemon.setAttribute('src', imageUrl);
    var $container = document.querySelector('.container');
    $container.appendChild(pokemonName);
    $container.appendChild(pokemon);
  }
  );
 */
