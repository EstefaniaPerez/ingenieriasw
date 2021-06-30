import { render, screen } from '@testing-library/react';
import App from './App';

describe('Comprobación de formulario', () =>{
  it('Deberia existir un boton submit', () => {
    render( <App/>)

    expect(
      screen.getByRole('button', { name:/Submit/i})
    ).toBeInTheDocument();
  })
})

