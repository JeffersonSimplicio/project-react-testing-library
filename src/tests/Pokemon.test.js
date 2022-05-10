import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('Card opssui um link para mais detalhes', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
    expect(linkDetails).toBeInTheDocument();
  });

  test(`Ao cliclar no link "More details" o usuario é redirecionado
  para a pagina coerente`, () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkDetails).toBeInTheDocument();
    userEvent.click(linkDetails);

    const titleDetails = screen.getByRole(
      'heading', { level: 2, name: 'Pikachu Details' },
    );
    expect(titleDetails).toBeInTheDocument();
  });
});
