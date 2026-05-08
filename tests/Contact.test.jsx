import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Contact from '../src/components/Contact';

describe('Contact Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('deve ter o link correto para o Instagram e abrir em nova aba', () => {
    render(<Contact />);
    
    const linkInsta = screen.getByText('@taciana.dk');
    
    expect(linkInsta).toHaveAttribute('href', 'https://www.instagram.com/taciana.dk?igsh=MTk4aXFnZzl5ZWk2dg=='); 
    
    expect(linkInsta).toHaveAttribute('target', '_blank');
  });

  it('deve ter o link correto para o WhatsApp e abrir em nova aba', () => {
    render(<Contact />);
    
    const linkWhats = screen.getByText('+55 35 8824-7820');
    
    // Verifica se o href tem a API do WhatsApp (ajuste para o número real dela depois)
    expect(linkWhats).toHaveAttribute('href', 'https://wa.me/553588247820?text=Olá%20Taciana,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento!'); 
  });
  {/*
  it('deve ter o link correto para o E-mail', () => {
    render(<Contact />);
    
    const linkEmail = screen.getByText('taciana@email.com');
    
    // Verifica se o href aciona o gatilho de e-mail do sistema
    expect(linkEmail).toHaveAttribute('href', 'mailto:taciana@email.com'); 
  });
  */}
});