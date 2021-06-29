import { render, screen } from '@testing-library/react';
import App from './App';

describe('Comprobación de formulario', () =>{
  it('Falta boton submit', () => {
    render( <App/>)

    expect(
      screen.getByRole('button', { name:/Submit/i})
    ).toBeInTheDocument();
  })
})

