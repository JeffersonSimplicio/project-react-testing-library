import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes da componente pokedex', () => {
  const pokeType = 'pokemon-type';

  test('Possui um h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(title).toBeInTheDocument();
  });

  test(`Todos os pokemons são listados ao clicar no botão "Próximo pokémon" e
  apenas um pokemon por vez`, () => {
    renderWithRouter(<App />);

    const pokemonListPartOne = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam'];
    const pokemonListPartTwo = ['Mew', 'Rapidash', 'Snorlax', 'Dragonair', 'Pikachu'];
    const pokemonList = pokemonListPartOne.concat(pokemonListPartTwo);

    // Verifica também se ao iniciar o filtro selecionado é "All"
    pokemonList.forEach((pokemon) => {
      // Procurar o botão dentro do for para garantir que ele não sumiria
      const nextButton = screen.getByRole('button', { name: 'Próximo pokémon' });
      expect(nextButton).toBeInTheDocument();

      // O "getBy..." quera se houver mais de um match
      const namePokemon = screen.getByTestId('pokemon-name');
      expect(namePokemon).toBeInTheDocument();
      expect(namePokemon.innerHTML).toBe(pokemon);

      userEvent.click(nextButton);
    });
  });

  test('Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonAllKinds = screen.getByRole('button', { name: 'All' });
    expect(buttonAllKinds).toBeInTheDocument();

    const typosList = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic',
      'Normal', 'Dragon'];
    // typosList.forEach((type) => {
    //   const buttonType = screen.getByRole('button', { name: type });
    //   expect(buttonType).toBeInTheDocument();
    // });

    let amountsTypos = 0;
    typosList.forEach((type) => {
      const listTypesButtons = screen.getAllByTestId('pokemon-type-button');
      listTypesButtons.forEach((buttonType) => {
        if (buttonType.innerHTML === type) {
          amountsTypos += 1;
        }
      });
    });
    expect(amountsTypos).toBe(typosList.length);

    const buttonTypeBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(buttonTypeBug);
    let checkType = screen.getByTestId(pokeType);
    expect(checkType.innerHTML).toBe('Bug');

    // Verifica novamente se o botão All esta na tela
    const buttonAllPersists = screen.getByRole('button', { name: 'All' });
    expect(buttonAllPersists).toBeInTheDocument();

    const buttonTypeNormal = screen.getByRole('button', { name: 'Normal' });
    userEvent.click(buttonTypeNormal);
    checkType = screen.getByTestId(pokeType);
    expect(checkType.innerHTML).toBe('Normal');
  });

  test('Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const allKinds = screen.getByRole('button', { name: 'All' });
    expect(allKinds).toBeInTheDocument();

    const buttonBug = screen.getByRole('button', { name: 'Bug' });
    expect(buttonBug).toBeInTheDocument();
    userEvent.click(buttonBug);

    userEvent.click(allKinds);

    let typePokemon = screen.getByTestId(pokeType);
    expect(typePokemon.innerHTML).toBe('Electric');

    const nextPokemon = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(nextPokemon).toBeInTheDocument();
    userEvent.click(nextPokemon);

    typePokemon = screen.getByTestId(pokeType);
    expect(typePokemon.innerHTML).toBe('Fire');
  });
});
