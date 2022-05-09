import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente App', () => {
  test('Possui um conjunto de Links fixos', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  test('Link "Home" leva para rota  "/"', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });

    userEvent.click(linkHome);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('Link "About" leva para rota  "/about"', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });

    userEvent.click(linkAbout);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });
});
