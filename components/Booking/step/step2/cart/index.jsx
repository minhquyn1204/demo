import React, { useContext, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import styles from './styles.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from '@mui/material';
import { multiStepContext } from '../../../context';

export default function Cart({ setCartView }) {
  const { setCart } = useContext(multiStepContext);
  const { items, removeItem, totalItems, cartTotal, emptyCart } = useCart();
  const handleRemove = (id) => {
    removeItem(id);
  };
  const AllRemove = () => {
    emptyCart();
  };
  const handleSetView = () => {
    setCartView(false);
  };
  useEffect(() => {
    setCart(items);
  }, [items]);
  return (
    <div className={styles.cart}>
      <div className={styles.titleCart}>
        <h5>DỊCH VỤ ĐÃ CHỌN</h5>
        <Button onClick={handleSetView}>X</Button>
      </div>
      <div className={styles.carts}>
        {items.map((item, e) => (
          <div className={styles.item} key={e}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.price}>
              <span>{item.price}</span> <span className={styles.VND}>đ</span>
            </div>
            <div className={styles.remove}>
              <AiFillDelete onClick={() => handleRemove(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.title}>
          <h5>TỔNG THANH TOÁN :</h5> <span>({totalItems} dịch vụ)</span>
        </div>
        <div className={styles.cartTotal}>
          <span className={styles.VND}>đ</span>
          <span>{cartTotal}</span>
        </div>
        {totalItems > 0 ? (
          <Button onClick={AllRemove}>Xoá Tất Cả</Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
