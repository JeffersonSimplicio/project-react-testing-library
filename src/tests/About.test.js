import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { About } from '../components';
// import renderWithRouter from './renderWithRouter';

describe('Testes do componente About', () => {
  test('Se contem impormações sobre a Pokedex', () => {
    render(<About />);

    const infoDex = screen.getByText(/a digital encyclopedia containing all/);

    expect(infoDex).toBeInTheDocument();
  });

  test('Contem um h2 contedo o texto "About Pokédex"', () => {
    render(<About />);

    const heading = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });

    expect(heading).toBeInTheDocument();
  });

  test('Existe dois paragrafos sobre a pokedex', () => {
    render(<About />);

    const pOne = screen.getByText(/This application simulates/);
    const pTwo = screen.getByText(/One can filter/);

    expect(pOne).toBeInTheDocument();
    expect(pTwo).toBeInTheDocument();
  });

  test('Se a imagem renderizada é a correta', () => {
    render(<About />);

    const imagePokedex = screen.getByAltText('Pokédex');

    expect(imagePokedex).toBeInTheDocument();
    expect(imagePokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
