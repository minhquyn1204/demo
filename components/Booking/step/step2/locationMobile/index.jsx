import React from 'react';
import styles from './styles.module.scss';

export default function LocationMobile() {
  return (
    <div>
      <div className={styles.nameLocation}>
        <div className={styles.name}>The Local House</div>
        <div className={styles.location}>293 Bùi Thiện Ngộ-Hoà xuân-Cẩm lệ</div>
        <div className={styles.Opening}>Opening: 9h30 - 22h30</div>
      </div>
    </div>
  );
}
