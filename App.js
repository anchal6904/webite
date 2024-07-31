import React from 'react';
import AppRouter from './router/AppRouter';
import { CartProvider } from './pages/CartContext'; // Ensure the path is correct

function App() {
  return (
    <CartProvider>
      <div>
        <AppRouter />
      </div>
    </CartProvider>
  );
}

export default App;
