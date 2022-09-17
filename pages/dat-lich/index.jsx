import React from 'react';
import Booking from '../../components/Booking';
import StepContext from '../../components/Booking/context';

export default function index() {
  return (
    <>
      <StepContext>
        <Booking />
      </StepContext>
    </>
  );
}
