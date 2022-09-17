import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Button, Grid, Pagination, Stack } from '@mui/material';
import MediaCard from './card/Card';
import axios from 'axios';
import { checkIfAIsInB, ConvertViToEn } from '../../../../../lib';
// import { useCart } from 'react-use-cart';
// import clsx from 'clsx';

export default function List({ searchTerm }) {
  const firstIndex = 6;
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(0);
  const filteredservice = product?.filter((data) => {
    return searchTerm.length === 0
      ? true
      : checkIfAIsInB(ConvertViToEn(searchTerm), ConvertViToEn(data.data.name));
  });

  useEffect(() => {
    listCart();
  }, []);
  const listCart = async () => {
    async function Products() {
      const Product = await axios.get('http://localhost:5000/Product');
      setProduct(Product.data);
    }
    Products();
  };
  const handlePageChange = (e, value) => {
    setPage(value);
  };

  return (
    <div>
      <Grid container className={styles.GridCard}>
        {filteredservice
          .slice((page - 1) * firstIndex, page * firstIndex)
          .map((data, index) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              className={styles.items}
              key={index}
            >
              <MediaCard
                data={data}
                setSelected={setSelected}
                selected={selected}
              />
            </Grid>
          ))}
      </Grid>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(filteredservice.length / firstIndex)}
          shape="rounded"
          color="primary"
          onChange={handlePageChange}
          page={page}
        />
      </Stack>
    </div>
  );
}
