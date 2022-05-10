import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
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
});
