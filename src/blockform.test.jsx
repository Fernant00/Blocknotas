import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import BlockForm from './Components/BlockForm';
import { BlocContext } from './Context/BlocContext';
import '@testing-library/jest-dom'; // Import jest-dom matchers

describe('BlockForm', () => {
  const mockCreateNote = vi.fn();
  const mockSetKeyId = vi.fn();

  const mockContextValue = {
    keyId: 1,
    setKeyId: mockSetKeyId,
    CreateNote: mockCreateNote,
  };

  it('renders the form elements correctly', () => {
    render(
      <BlocContext.Provider value={mockContextValue}>
        <MemoryRouter>
          <BlockForm />
        </MemoryRouter>
      </BlocContext.Provider>
    );

    screen.debug();

    expect(screen.getByText(/Registrar nota/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Escribe el titulo/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Escribe la descripcion/i)).toBeInTheDocument();

    expect(screen.getByText(/Guardar/i)).toBeInTheDocument();
  });
});
