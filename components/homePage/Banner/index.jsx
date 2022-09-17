import React from 'react';
import { Grid, TextField } from '@mui/material';
import Card from './card/Card';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h3>Xin Chào !</h3>
      <TextField
        size='small'
        type='search'
        placeholder='Tìm điểm đến'
        className={styles.input}
      />
      <div className={styles.title}>
        <div className={styles.mrb1}>Địa điểm nổi tiếng</div>
        <span>
          <Link href='/'>xem thêm </Link>
          {`>`}
        </span>
      </div>
      <Grid container className={styles.card}>
        <Grid item xs={6} sm={6} md={4} className={styles.item}>
          <Card />
        </Grid>
        <Grid item xs={6} sm={6} md={4} className={styles.item}>
          <Card />
        </Grid>
        <Grid item xs={6} sm={6} md={4} className={styles.item}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}
