import { render, screen,cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Navbar from '../src/components/Navbar'; 

describe('Integração: Navbar', () => {
  
  afterEach(() => {
    cleanup();
  });
  
  it('deve renderizar a marca/nome corretamente na tela', () => {
    render(<Navbar />);
    const marca = screen.getByText(/taciana/i); 
    expect(marca).toBeInTheDocument();
  });

  it('deve conter os links de navegação sobre com os destinos corretos', () => {
    render(<Navbar />);
    
    const linkSobre = screen.getByText('Sobre');
    const linkPortfolio = screen.getByText('Portfólio');
    const linkContato = screen.getByText('Contato');

    expect(linkSobre).toBeInTheDocument();
    expect(linkSobre).toHaveAttribute('href', '#about');

    expect(linkPortfolio).toBeInTheDocument();
    expect(linkPortfolio).toHaveAttribute('href', '#gallery');

    expect(linkContato).toBeInTheDocument();
    expect(linkContato).toHaveAttribute('href', '#contact');
  });
  
});