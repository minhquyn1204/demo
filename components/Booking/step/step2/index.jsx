import { Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import { multiStepContext } from '../../context';
import styles from './styles.module.scss';
import Cart from './cart';
import BasicModal from './warning/Modal';
import { useCart } from 'react-use-cart';
import { MdArrowBackIosNew } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import clsx from 'clsx';
import Btn from './Button';
import Search from './search';
import LocationMobile from './locationMobile';
import List from './list';

export default function Services() {
  const { setStep } = useContext(multiStepContext);
  const [cartView, setCartView] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const { items, totalItems } = useCart();

  // search
  const handleCart = () => {
    setCartView(true);
  };
  return (
    <div className={styles.services}>
      <div className={styles.body}>
        <Grid container className={styles.cards}>
          <Grid item xs={12} className={styles.banner}>
            <div className={styles.taskbar}>
              <div className={styles.back}>
                <MdArrowBackIosNew onClick={() => setStep(0)} />
              </div>
              <div className={styles.cartMoblie}>
                <AiOutlineShoppingCart onClick={handleCart} />
                <span>{totalItems}</span>
              </div>
            </div>
            <img src='/background/br.png' />
          </Grid>
          <Grid item xs={12} sm={7.5} md={7.5} className={styles.listCart}>
            <LocationMobile />
            <Search setSearchTerm={setSearchTerm} />
            <List searchTerm={searchTerm} />
          </Grid>
          <div className={styles.border}></div>
          <Grid item xs={4} sm={4} md={4} className={styles.cart}>
            <Cart />
          </Grid>
        </Grid>
        <div
          className={clsx(styles.cartMobile, {
            [styles.active]: cartView === true,
          })}
        >
          <Cart setCartView={setCartView} />
        </div>
        <Btn setStep={setStep} setOpen={setOpen} items={items} />
      </div>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}
