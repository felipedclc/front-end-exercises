import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);

    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText(/Sobre/i));

    // verificando se estamos na página correta
    const pathname = history.location.pathname; // pathname = caminho da url(string)
    expect(pathname).toBe('/about');

    // verificando se foi encontrado o texto quando clicamos no link no navegador
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);

    // é passado como argumento algum link que não existe
    history.push('/pagina/que-nao-existe/'); // push simula entrar no link

    const noMatch = getByText(/Página não encontrada/i); // i elimina qualquer letra maiuscula ou minuscula
    expect(noMatch).toBeInTheDocument();
  });
});

// Por último, vamos mostrar como testar um componente separadamente:
it('deve renderizar o componente About (apenas componente)', () => {
  const { getByText } = renderWithRouter(<About />);
  
  const aboutOnly = getByText(/Você está na página Sobre/i);
  expect(aboutOnly).toBeInTheDocument();
});