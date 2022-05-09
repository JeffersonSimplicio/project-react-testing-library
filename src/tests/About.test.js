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
});
