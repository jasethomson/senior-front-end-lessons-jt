import React from 'react';
import ReactDOM from 'react-dom';

function PokemonList(props) {
  const pokemon = (
    <ul>
      {props.pokedex.map(pokedex =>
        <li key={pokedex.number}>
          {pokedex.name}
        </li>
      )}
    </ul>
  );
  return (
    <div>
      {pokemon}
    </div>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
ReactDOM.render(
  <PokemonList pokedex={pokedex} />,
  document.querySelector('#root')
);
