import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../components';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente Not Found', () => {
  test('O texto "Page requested not found 😭" esta sendo renderizado na tag H2', () => {
    renderWithRouter(<NotFound />);
    const textNotFound = screen.getByRole(
      'heading', { level: 2, name: /Page requested not found/ },
    );
    expect(textNotFound).toBeInTheDocument();
  });

  test('Pikachu é renderizado', () => {
    renderWithRouter(<NotFound />);

    const pikachuCrying = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );

    expect(pikachuCrying).toBeInTheDocument();
    expect(pikachuCrying).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
