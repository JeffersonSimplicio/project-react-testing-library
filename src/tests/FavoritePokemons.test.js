import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
// import App from '../App';
import { FavoritePokemons } from '../components';

describe('Testa o componente Favorites Pokémons', () => {
  test('Caso a pessoa não tenha pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavorites = screen.getByText('No favorite pokemon found');

    expect(noFavorites).toBeInTheDocument();
  });

  // test('Os podemons favoritos estão salvos', () => {
  //   renderWithRouter(<App />);

  //   // Adicionando Pikachu
  //   const moreDetails = screen.getByText('More details');
  //   expect(moreDetails).toBeInTheDocument();
  //   userEvent.click(moreDetails);
  //   const titlePikachu = screen.getByRole(
  //     'heading', { level: 2, name: 'Pikachu Details' },
  //   );
  //   expect(titlePikachu).toBeInTheDocument();
  //   const addFavorites = screen.getByRole('checkbox');
  //   expect(addFavorites).toBeInTheDocument();
  //   userEvent.click(addFavorites);

  //   // Checa se Pikachu foi adicionado
  //   const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
  //   expect(linkFavorite).toBeInTheDocument();
  //   userEvent.click(linkFavorite);
  //   const favorite = screen.getByText('Pikachu');
  //   expect(favorite).toBeInTheDocument();
  // });
});
