import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import styles from './card.module.scss';
import { useCart } from 'react-use-cart';
import clsx from 'clsx';
import { useWindowSize } from 'react-use';

export default function MediaCard({ data, selected, setSelected }) {
  const { width } = useWindowSize();
  const { addItem, items } = useCart();
  const handleMobile = (data) => {
    setSelected(data.data.id);
  };
  useEffect(() => {}, [width]);
  const handle = (data) => {
    if (items.find((item) => item.id === data.data.id)) return;
    addItem(data.data);
  };
  return (
    <div className={styles.card}>
      <div className={styles.img} onClick={() => handleMobile(data)}>
        <div
          className={clsx(styles.modal, {
            [styles.actives]: data.data.id === selected,
          })}
        >
          <div
            className={clsx(styles.priceModal, {
              [styles.active]: data.data.id === selected,
            })}
          >
            <div className={styles.priceMobile}>{data.data.price}K</div>
            <Button onClick={() => handle(data)}>Thêm</Button>
          </div>
        </div>
        <img src={data.data.img} alt='' />
      </div>
      <div className={styles.mainContent}>
        <div
          className={clsx(styles.name, {
            [styles.active]: data.data.id === selected,
          })}
          onClick={() => handleMobile(data)}
        >
          {data.data.name.length > 17 ? (
            <>
              <>{`${data.data.name.slice(0, 17)}...`}</>
            </>
          ) : (
            <>{data.data.name}</>
          )}
        </div>
        <div className={styles.content}>
          {data.data.content.length > 30 ? (
            <>
              {width <= 900 ? (
                <>{`${data.data.content.slice(0, 50)}...`}</>
              ) : (
                <>{`${data.data.content.slice(0, 90)}...`}</>
              )}
            </>
          ) : (
            <>{data.data.content}</>
          )}
        </div>
        <div className={styles.price}>{data.data.price}K</div>
        <div className={styles.book}>
          <Button
            size='small'
            sx={{
              margin: 'right',
              color: '#fff',
              bgcolor: '#006C4E',
              '&.MuiButtonBase-root:hover': {
                bgcolor: '#006C4E',
              },
            }}
            onClick={() => handle(data)}
          >
            Chọn
          </Button>
        </div>
      </div>
    </div>
  );
}
