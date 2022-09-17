import React, { useState } from 'react';
import Step from '.';

export const multiStepContext = React.createContext();
export default function StepContext() {
  const [currentStep, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [address, setAddress] = useState();
  const [cart, setCart] = useState();
  const [staff, setStaffcontext] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [formValue, setFormValue] = useState();
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          success,
          setSuccess,
          address,
          setAddress,
          cart,
          setCart,
          staff,
          setStaffcontext,
          date,
          setDate,
          time,
          setTime,
          formValue,
          setFormValue,
        }}
      >
        <Step />
      </multiStepContext.Provider>
    </div>
  );
}
