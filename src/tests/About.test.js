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
});
