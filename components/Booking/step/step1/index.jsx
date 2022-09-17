import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Map from './map';
import ListCard from './list';
import BasicModal from './warning/Modal';
import Btn from './Button';

export default function Location() {
  const [open, setOpen] = useState(false);
  const [map, setMap] = useState();
  const [dataLocation, setDataLocation] = useState();
  return (
    <div className={styles.loca}>
      <Grid container className={styles.Location}>
        <Grid item xs={12} sm={6} className={styles.list}>
          <ListCard setMap={setMap} setDataLocation={setDataLocation} />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.map}>
          <Map map={map} />
        </Grid>
        <Btn dataLocation={dataLocation} setOpen={setOpen} />
      </Grid>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}
