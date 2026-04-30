import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// 1. O caminho de importação foi ajustado para refletir a nova organização de pastas
import Navbar from '../src/components/Navbar'; 

describe('Integração: Navbar', () => {
  it('deve renderizar a marca/nome corretamente na tela', () => {
    render(<Navbar />);
    
    // Lembre-se de manter a palavra exata que está no seu código real
    const marca = screen.getByText(/taciana/i); 
    
    expect(marca).toBeInTheDocument();
  });
});