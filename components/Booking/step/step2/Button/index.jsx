import { Button } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export default function Btn({ items, setOpen, setStep }) {
  const handleStep = () => {
    if (items.length > 0) {
      setStep(2);
    } else {
      setOpen(true);
    }
  };
  return (
    <div>
      <div className={styles.exit}>
        <Button
          onClick={() => setStep(0)}
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
    </div>
  );
}
