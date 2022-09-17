import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { multiStepContext } from '../../../context';
import styles from './styles.module.scss';

export default function Btn({ dataLocation, setOpen }) {
  const { setStep } = useContext(multiStepContext);
  const handleStep = () => {
    if (dataLocation.length > 0) {
      setStep(1);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className={styles.next}>
      <Button
        onClick={handleStep}
        sx={{
          width: '150px',
          color: '#fff',
          bgcolor: '#006C4E',
          '&.MuiButtonBase-root:hover': {
            bgcolor: '#006C4E',
          },
        }}
      >
        Tiêp Tục
      </Button>
    </div>
  );
}
