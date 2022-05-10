import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes da componente Pokemon Details', () => {
  const moreDetails = 'More details';

  test('As informações detalhadas estão sendo exibidas', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: moreDetails });
    expect(details).toBeInTheDocument();
    userEvent.click(details);

    const pokeDetails = screen.getByRole(
      'heading', { level: 2, name: 'Pikachu Details' },
    );
    expect(pokeDetails).toBeInTheDocument();

    const detailsOff = screen.queryByRole('link', { name: moreDetails });
    expect(detailsOff).not.toBeInTheDocument();

    const titleSumary = screen.getByRole(
      'heading', { level: 2, name: 'Summary' },
    );
    expect(titleSumary).toBeInTheDocument();

    const infoPoke = screen.getByText(/roasts hard berries with electricity to make/);
    expect(infoPoke).toBeInTheDocument();
  });

  // test('Os mapas com localização do pokemon são exibidos', () => {
  //   renderWithRouter(<App />);
  //   const details = screen.getByRole('link', { name: moreDetails });
  //   expect(details).toBeInTheDocument();
  //   userEvent.click(details);

  //   const titleLocalization = screen.getByRole(
  //     'heading', { level: 2, name: 'Game Locations of Pikachu' },
  //   );
  //   expect(titleLocalization).toBeInTheDocument();

  //   const imgLozalization = screen.getAllByAltText('Pikachu location');
  //   expect(imgLozalization.length).toBe(2);

  //   expect(imgLozalization[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  //   expect(imgLozalization[0]).toBeInTheDocument();

  //   expect(imgLozalization[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  //   expect(imgLozalization[1]).toBeInTheDocument();

  //   const viridianFlorest = screen.getByText('Kanto Viridian Forest');
  //   expect(viridianFlorest).toBeInTheDocument();

  //   const powerPlant = screen.getByText('Kanto Power Plant');
  //   expect(powerPlant).toBeInTheDocument();
  // });
});
