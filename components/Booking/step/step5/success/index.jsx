import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdOutlineCloudDone } from 'react-icons/md';
import { BsCloudDownload } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
const QRcode = dynamic(() => import('qrcode.react'), { ssr: false });
export default function Success({ success, setSuccess }) {
  const router = useRouter();
  const handleClose = () => {
    setSuccess(false);
    router.push('/');
  };
  const downloadQR = () => {
    const canvas = document.getElementById('myqr');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'myqr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
      <Modal
        open={success}
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
          >
            <MdOutlineCloudDone
              style={{ height: '50px', width: '50px', color: '#22bb33' }}
            />
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontWeight: 500, fontSize: '16px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            ĐẶT LỊCH THÀNH CÔNG
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontWeight: 500, fontSize: '16px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            <QRcode id='myqr' value='quyn' size={200} includeMargin={true} />
            <div
              onClick={downloadQR}
              style={{ transform: 'translateY(-27px)', cursor: 'pointer' }}
              color='primary'
            >
              <BsCloudDownload
                style={{ height: 30, width: 30, color: '#3366CC' }}
              />
            </div>
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontWeight: 500, fontSize: '16px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            Mã đặt lịch: <span style={{ color: '#BA1A1A' }}>12121</span>
          </Typography>
          <Typography
            sx={{ textAlign: 'center', fontWeight: 500, fontSize: '16px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            Cảm ơn quý khách đã tin tưởng và chọn dịch vụ của chúng tôi.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
