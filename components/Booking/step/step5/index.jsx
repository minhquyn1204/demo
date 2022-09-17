import { Button, TextField } from '@mui/material';
import { width } from '@mui/system';
import React, { useContext, useState } from 'react';
import { multiStepContext } from '../../context';
import Confirm from './confirm';
import styles from './styles.module.scss';
import Success from './success';
import { MdArrowBackIosNew } from 'react-icons/md';
import isEmpty from 'validator/lib/isEmpty';

export default function Information() {
  const { setStep, setFormValue } = useContext(multiStepContext);
  const [open, setOpen] = useState(false);
  const [accept, setAccept] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validationMsg, setValidationMsg] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const { name, email, phone, note } = form;
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const validatorAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = 'Vui lòng chọn thời gian!';
    }
    if (isEmpty(email)) {
      msg.email = 'Vui lòng điển email!';
    }
    if (isEmpty(phone)) {
      msg.phone = 'Vui lòng nhập số điện thoại!';
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleSubmit = () => {
    const isValid = validatorAll();
    if (!isValid) return;
    if (isValid) {
      setOpen(true);
      setFormValue({ ...form });
    }
  };
  return (
    <div className={styles.Information}>
      <div className={styles.body}>
        <div className={styles.taskbar}>
          <div className={styles.back}>
            <MdArrowBackIosNew onClick={() => setStep(3)} />
          </div>
          <div className={styles.title}>Điền Thông Tin</div>
        </div>
        <h3>Hãy điền thông tin của bạn </h3>
        <div className={styles.inputForm}>
          <TextField
            size='small'
            placeholder='Họ và tên'
            label='Họ và Tên'
            type='text'
            sx={{ width: '100%', marginBottom: '10px' }}
            name='name'
            value={name || ''}
            onChange={handleOnChange}
            error={validationMsg.name && true}
            helperText={validationMsg.name}
          />
          <TextField
            size='small'
            placeholder='nhập email'
            label='Email'
            type='text'
            sx={{ width: '100%', marginBottom: '10px' }}
            name='email'
            value={email || ''}
            onChange={handleOnChange}
            error={validationMsg.email && true}
            helperText={validationMsg.email}
          />
          <TextField
            size='small'
            placeholder='Nhập số điện thoại'
            label='Số điên thoại'
            type='Number'
            sx={{ width: '100%', marginBottom: '10px' }}
            name='phone'
            value={phone || ''}
            onChange={handleOnChange}
            error={validationMsg.phone && true}
            helperText={validationMsg.phone}
          />
          <TextField
            size='small'
            label='Ghi chú'
            placeholder='Nhập ghi chú'
            type='text'
            multiline
            rows={4}
            sx={{ width: '100%', marginBottom: '10px' }}
            name='note'
            value={note || ''}
            onChange={handleOnChange}
            error={validationMsg.note && true}
            helperText={validationMsg.note}
          />
          <Button
            sx={{
              color: '#fff',
              bgcolor: '#006c4e',
              width: '100%',
              '&.MuiButtonBase-root:hover': {
                bgcolor: '#006c4e',
              },
            }}
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>
        </div>
        <div className={styles.exit}>
          <Button
            onClick={() => setStep(3)}
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
        <Confirm
          open={open}
          setOpen={setOpen}
          accept={accept}
          setAccept={setAccept}
          success={success}
          setSuccess={setSuccess}
        />
        <Success success={success} setSuccess={setSuccess} />
      </div>
    </div>
  );
}
