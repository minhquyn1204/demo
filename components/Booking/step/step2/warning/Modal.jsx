import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineWarning } from 'react-icons/ai';
import { multiStepContext } from '../../../context';
import styles from './styles.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setStep } = React.useContext(multiStepContext);

  return (
    <div>
      <Modal
        open={open}
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
          <Typography sx={{ textAlign: 'center' }}>
            <AiOutlineWarning
              style={{ color: '#FFCC00', height: 50, width: 50 }}
            />
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ textAlign: 'center' }}
          >
            Bạn chưa chọn sản phẩm
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Có phải bạn muốn tư vấn tại spa hair 1
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '250px',
              margin: '0 auto',
              marginTop: '15px',
            }}
          >
            <Button
              sx={{
                width: '100px',
                color: '#fff',
                bgcolor: '#339900',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#339900',
                },
              }}
              onClick={() => setStep(2)}
            >
              Ok
            </Button>
            <Button
              sx={{
                width: '100px',
                color: '#fff',
                bgcolor: '#cc3300',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: '#cc3300',
                },
              }}
              onClick={handleClose}
            >
              Huỷ
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
