import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineWarning } from 'react-icons/ai';
import styles from './styles.module.scss';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal({ open, setOpen }) {
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            Vui lòng chọn ngày và thời gian
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Không thể tiếp tục khi chưa chọn ngày và thời gian
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
