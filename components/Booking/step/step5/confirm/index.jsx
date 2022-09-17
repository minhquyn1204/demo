import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './styles.module.scss';
import { Grid } from '@mui/material';
import Accept from './accept';
import { multiStepContext } from '../../../context';
import { useCart } from 'react-use-cart';

export default function Confirm({
  open,
  setOpen,
  accept,
  setAccept,
  success,
  setSuccess,
}) {
  const { address, cart, staff, time, date, formValue } =
    React.useContext(multiStepContext);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setAccept(true);
  };
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
          <Typography
            sx={{
              textAlign: 'center',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            Xác nhận thông tin đăng ký
          </Typography>
          <Grid container className={styles.Grid}>
            <Grid item xs={6} className={styles.item}>
              Người đặt
            </Grid>
            <Grid item xs={6} className={styles.item}>
              : {formValue?.name}
            </Grid>
            <Grid item xs={6} className={styles.item}>
              Số điện thoại
            </Grid>
            <Grid item xs={6} className={styles.item}>
              : {formValue?.phone}
            </Grid>
            <Grid item xs={6} className={styles.item}>
              Ngày đặt
            </Grid>
            <Grid item xs={6} className={styles.item}>
              : {date}
            </Grid>
            <Grid item xs={6} className={styles.item}>
              Giờ đặt
            </Grid>
            <Grid item xs={6} className={styles.item}>
              : {time}
            </Grid>
            <Grid item xs={6} className={styles.item}>
              Dịch vụ đăng ký
            </Grid>
            <Grid item xs={6} className={styles.item}>
              :
              {cart.map((data, index) => (
                <span key={index}> {data.name},</span>
              ))}
            </Grid>
            <Grid item xs={6} className={styles.item}>
              Nhân viên
            </Grid>
            <Grid item xs={6} className={styles.item}>
              : {staff}
            </Grid>
            <Grid item xs={6} className={styles.item}>
              Địa chỉ
            </Grid>
            <Grid item xs={6} className={styles.item}>
              :{' '}
              {address.map((data, index) => (
                <span key={index}>{data.data.address}</span>
              ))}
            </Grid>
          </Grid>

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
              className={styles.close}
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
              onClick={handleOpen}
              className={styles.next}
            >
              Tiếp tục
            </Button>
          </div>
          <Accept
            accept={accept}
            setAccept={setAccept}
            success={success}
            setSuccess={setSuccess}
            setOpen={setOpen}
          />
        </Box>
      </Modal>
    </div>
  );
}
