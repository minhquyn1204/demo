import React from 'react';
import { CartProvider } from 'react-use-cart';
import Steps from './step';

export default function Booking() {
  return (
    <CartProvider>
      <Steps />
    </CartProvider>
  );
}
