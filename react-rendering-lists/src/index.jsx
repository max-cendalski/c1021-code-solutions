import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonList(props) {
  const pokemonObject = props.pokemons;
  return (
  <ul>
    {pokemonObject.map(item =>
      <li key={item.number}>
        {item.name}
      </li>
    )}
  </ul>
  );
}

ReactDOM.render(<PokemonList pokemons={pokedex} />, document.querySelector('#root'));
