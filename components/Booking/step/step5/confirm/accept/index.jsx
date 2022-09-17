import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './styles.module.scss';
import { multiStepContext } from '../../../../context';

export default function Accept({ accept, setAccept, setSuccess, setOpen }) {
  const { address, cart, staff, time, date, formValue } =
    React.useContext(multiStepContext);
  const handleClose = () => setAccept(false);
  const handleOpen = () => {
    setSuccess(true);
    setAccept(false);
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={accept}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={styles.box}>
          <Button
            sx={{ position: 'absolute', top: '0', right: '0' }}
            onClick={handleClose}
          >
            x
          </Button>
          <Typography
            sx={{ textAlign: 'center', fontWeight: 500, fontSize: '25px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            Đăng ký lịch hẹn
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontSize: '16px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            Bạn có chắc chắn muốn đặt lịch không?
          </Typography>
          <div className={styles.buttons}>
            <Button
              sx={{
                color: '#fff',
                bgcolor: '#006C4E',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#006C4E',
                },
              }}
              onClick={handleClose}
              className={styles.submit}
            >
              trở về
            </Button>
            <Button
              sx={{
                color: '#fff',
                bgcolor: '#006C4E',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#006C4E',
                },
              }}
              onClick={() => handleOpen()}
              className={styles.close}
            >
              Tiếp tục
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
