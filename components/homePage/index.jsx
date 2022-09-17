import { fontWeight } from '@mui/system';
import React from 'react';
import Banner from './Banner';
import styles from './styles.module.scss';

export default function Homepage() {
  return (
    <div className={styles.home}>
      <div className={styles.bgrBanner}>
        <img src="/background/b1.jpg" alt="" />
        <h3>
          Tìm Địa Điểm Tiếp Theo Để{' '}
          <span style={{ color: '#28A37A', fontWeight: '800' }}>BOOK</span> Nào!
        </h3>
        <div className={styles.color}></div>
      </div>
      <Banner />
    </div>
  );
}
