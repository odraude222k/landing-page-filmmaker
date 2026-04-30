import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest'; // Traz o "poder" do toBeInTheDocument
import Navbar from '../src/components/Navbar'; 

describe('Integração: Navbar', () => {
  it('deve renderizar a marca/nome corretamente na tela', () => {
    // 1. O Vitest "monta" a Navbar no nosso navegador simulado (jsdom)
    render(<Navbar />);
    
    // 2. Procura pelo texto "TACIANA" (o /i ignora se é maiúscula ou minúscula)
    const marca = screen.getByText(/taciana/i); 
    
    // 3. Verifica se existe
    expect(marca).toBeInTheDocument();
  });
});