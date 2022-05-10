import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste da componente', () => {
  const moreDetails = 'More details';

  test('Renderiza as informações corretas do pokemon na tela', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.innerHTML).toBe('Electric');
    expect(pokemonType).toBeInTheDocument();

    const pokemonWeight = screen.getByText('Average weight: 6.0 kg');
    expect(pokemonWeight).toBeInTheDocument();

    const imagePokemon = screen.getByAltText('Pikachu sprite');
    expect(imagePokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imagePokemon).toBeInTheDocument();
  });

  test('Card opssui um link para mais detalhes', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: moreDetails });
    expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
    expect(linkDetails).toBeInTheDocument();
  });

  test(`Ao cliclar no link "More details" o usuario é redirecionado
  para a pagina coerente`, () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: moreDetails });
    expect(linkDetails).toBeInTheDocument();
    userEvent.click(linkDetails);

    const titleDetails = screen.getByRole(
      'heading', { level: 2, name: 'Pikachu Details' },
    );
    expect(titleDetails).toBeInTheDocument();
  });

  test('A URL é correta ao clicar em "More details"', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: moreDetails });
    expect(linkDetails).toBeInTheDocument();
    userEvent.click(linkDetails);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Os pokemons favoritos possuem estrela', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: moreDetails });
    expect(linkDetails).toBeInTheDocument();
    userEvent.click(linkDetails);

    const checkFavorite = screen.getByLabelText('Pokémon favoritado?');
    expect(checkFavorite).toBeInTheDocument();
    userEvent.click(checkFavorite);

    const iconFavorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(iconFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(iconFavorite).toBeInTheDocument();
  });
});
