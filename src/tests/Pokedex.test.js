import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes da componente pokedex', () => {
  test('Possui um h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(title).toBeInTheDocument();
  });

  // test('Todos os pokemons são listados ao clicar em proximo', () => {
  //   renderWithRouter(<App />);

  //   const pokemonListPartOne = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam'];
  //   const pokemonListPartTwo = ['Mew', 'Rapidash', 'Snorlax', 'Dragonair', 'Pikachu'];
  //   const pokemonList = pokemonListPartOne.concat(pokemonListPartTwo);

  //   pokemonList.forEach((pokemon) => {
  //     // Procurar o botão dentro do for para garantir que ele não sumiria
  //     const nextButton = screen.getByRole('button', { name: 'Próximo pokémon' });
  //     expect(nextButton).toBeInTheDocument();

  //     const namePokemon = screen.getByTestId('pokemon-name');
  //     expect(namePokemon).toBeInTheDocument();
  //     console.log(namePokemon.innerHTML);
  //     expect(namePokemon.innerHTML).toBe(pokemon);

  //     userEvent.click(nextButton);
  //   });
  // });
});
