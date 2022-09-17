import { GoLocation } from 'react-icons/go';
import * as React from 'react';
import {
  Button,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material';
import styles from './card.module.scss';
import { useWindowSize } from 'react-use';

export default function ActionAreaCard() {
  const { width } = useWindowSize();
  const [sizeH, setSizeH] = React.useState(150);
  React.useEffect(() => {
    if (width <= 600) {
      setSizeH(100);
    }
    if (width <= 960) {
      setSizeH(150);
    }
  }, [width]);
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardMedia
        component='img'
        height={sizeH}
        image='/card/a1.png'
        alt='green iguana'
      />
      <CardContent className={styles.content}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          className={styles.name}
        >
          Lizard
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          className={styles.desc}
        >
          <GoLocation /> Lizards are a group with over...
        </Typography>
        <div className={styles.handle}>
          <Button>Book</Button>
        </div>
      </CardContent>
    </Card>
  );
}
