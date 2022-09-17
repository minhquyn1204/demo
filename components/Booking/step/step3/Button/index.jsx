import { Button } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export default function Btn({ setOpen, book, setStep }) {
  const handleNext = () => {
    if (!book) {
      setOpen(true);
    } else {
      setStep(3);
    }
  };
  return (
    <div>
      <div className={styles.exit}>
        <Button
          onClick={() => setStep(1)}
          sx={{
            width: '150px',
            color: '#fff',
            bgcolor: '#006C4E',
            '&.MuiButtonBase-root:hover': {
              bgcolor: '#006C4E',
            },
          }}
        >
          Trở Lại
        </Button>{' '}
      </div>
      <div className={styles.next}>
        <Button
          onClick={handleNext}
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
    </div>
  );
}
