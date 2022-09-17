import React from 'react';
import { Grid } from '@mui/material';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('./Nav'), {
  ssr: false,
});

export default function Headers() {
  const router = useRouter();
  return (
    <div className={styles.headers}>
      <Grid
        container
        className={clsx(styles.Header, {
          [styles.active]: router.asPath === '/dat-lich',
        })}
      >
        <Grid item xs={2} className={styles.Logo}>
          <Link href="/">
            <img
              src="/logo/logo.jpg"
              width={190}
              height={80}
              alt="Picture of the author"
            />
          </Link>
        </Grid>
        <Grid item xs={10} className={styles.Navbar}>
          <Nav />
        </Grid>
      </Grid>
    </div>
  );
}
