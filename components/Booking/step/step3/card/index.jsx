import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '@mui/material';
import clsx from 'clsx';

export default function MediaCard({ data, book, setBook }) {
  const handleStaff = (data) => {
    setBook(data);
  };
  return (
    <div
      className={clsx(styles.MediaCard, {
        [styles.active]: book?.data.id === data.data.id,
      })}
      onClick={() => handleStaff(data)}
    >
      <div className={styles.image}>
        <img src='/background/avata.png' alt='' />
      </div>
      <div className={styles.content}>
        <h4>{data.data.name}</h4>
        <span> Kinh Nghiệm {data.data.experience} Năm</span>
        <br></br>
        <Button
          size='small'
          className={clsx(styles.buttons, {
            [styles.active]: book?.data.id === data.data.id,
          })}
          onClick={() => handleStaff(data)}
        >
          Đặt hẹn
        </Button>
      </div>
    </div>
  );
}
