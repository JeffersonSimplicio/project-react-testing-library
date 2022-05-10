import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste da componente', () => {
  test('Renderiza as informações corretas do pokemon na tela', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getAllByText('Electric');
    expect(pokemonType[0]).toBeInTheDocument();

    const pokemonWeight = screen.getByText('Average weight: 6.0 kg');
    expect(pokemonWeight).toBeInTheDocument();

    const imagePokemon = screen.getByAltText('Pikachu sprite');
    expect(imagePokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imagePokemon).toBeInTheDocument();
  });

  // test('Card opssui um link para mais detalhes', () => {
  //   renderWithRouter(<App />);

  //   const test = screen.getByRole('link', { name: 'More details' });
  //   expect(test).toHaveAttribute('href', '/pokemons/25');
  // });
});
