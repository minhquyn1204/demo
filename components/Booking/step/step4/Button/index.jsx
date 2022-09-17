import { Button } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export default function Btn({ setOpen, value, times, setStep }) {
  const handle = () => {
    if (!value || !times) {
      setOpen(true);
    } else {
      setStep(4);
    }
  };
  return (
    <div>
      <div className={styles.exit}>
        <Button
          onClick={() => setStep(2)}
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
          onClick={handle}
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
