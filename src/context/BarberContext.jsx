import { createContext, useContext } from 'react';

export const BarberContext = createContext(null);

export const useBarberContext = () => {
  const context = useContext(BarberContext);
  if (!context) {
    throw new Error("useBarberContext must be used within a BarberProvider");
  }
  return context;
};
