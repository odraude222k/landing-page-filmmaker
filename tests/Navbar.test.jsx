import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Navbar from '../src/components/Navbar';

describe('Navbar Component', () => {
  // Limpa a tela após cada teste
  afterEach(() => {
    cleanup();
  });

  it('deve renderizar a logo da Taciana corretamente', () => {
    render(<Navbar />);
    // 👇 Corrigido de Oliveira para Ferreira!
    const logo = screen.getByAltText('Logo Taciana Ferreira');
    expect(logo).toBeInTheDocument();
  });

  it('deve exibir o nome "Taciana Ferreira" na barra', () => {
    render(<Navbar />);
    expect(screen.getByText(/Taciana/i)).toBeInTheDocument();
    // 👇 Corrigido aqui também
    expect(screen.getByText(/Ferreira/i)).toBeInTheDocument();
  });

  it('deve renderizar os 4 links de navegação', () => {
    render(<Navbar />);
    expect(screen.getByText('Trabalhos')).toBeInTheDocument();
    expect(screen.getByText('Serviços')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('os links de navegação devem apontar para as âncoras corretas na página', () => {
    render(<Navbar />);
    
    // Captura cada link pelo texto e verifica o atributo "href"
    const linkTrabalhos = screen.getByText('Trabalhos');
    expect(linkTrabalhos).toHaveAttribute('href', '#works');

    const linkServicos = screen.getByText('Serviços');
    expect(linkServicos).toHaveAttribute('href', '#services');

    const linkSobre = screen.getByText('Sobre');
    expect(linkSobre).toHaveAttribute('href', '#about');

    const linkContato = screen.getByText('Contato');
    expect(linkContato).toHaveAttribute('href', '#contact');
  });
});