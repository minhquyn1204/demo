import React, { useState } from 'react';
import styles from './styles.module.scss';
// import QRcode from 'qrcode.react';
import { Grid, TextareaAutosize, TextField } from '@mui/material';
import dynamic from 'next/dynamic';
const QRcode = dynamic(() => import('qrcode.react'), { ssr: false });
// const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function QrCode() {
  // const [scanResultWebCam, setScanResultWebCam] = useState('');
  // console.log(scanResultWebCam);
  // const handleErrorWebCam = (error) => {
  //   console.log(error);
  // };
  // const handleScanWebCam = (result) => {
  //   if (result) {
  //     setScanResultWebCam(result);
  //   }
  // };
  const [qr, setQr] = useState('lintangwisesa');
  const handleChange = (event) => {
    setQr(event.target.value);
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
    <div className={styles.QrCode}>
      <span>QR Generator</span>
      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleChange}
          style={{ width: 320 }}
          value={qr}
          label="QR content"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>
      <div>
        {qr ? (
          <QRcode id="myqr" value={qr} size={320} includeMargin={true} />
        ) : (
          <p>No QR code preview</p>
        )}
      </div>
      <div>
        {qr ? (
          <Grid container>
            <Grid item xs={10}>
              {/* <TextareaAutosize
                style={{ fontSize: 18, width: 250, height: 100 }}
                rowsMax={4}
                defaultValue={qr}
                value={qr}
              /> */}
            </Grid>
            <Grid item xs={2}>
              <div
                onClick={downloadQR}
                style={{ marginLeft: 10 }}
                color="primary"
              >
                x
              </div>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>
      {/* <QrReader
        delay={300}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        style={{ width: '20%', margin: '0 auto' }}
      /> */}
    </div>
  );
}
