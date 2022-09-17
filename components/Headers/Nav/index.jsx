import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { useRouter } from 'next/router';
import { FaHome } from 'react-icons/fa';
import { MdQrCodeScanner } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';
import { useWindowSize } from 'react-use';

export default function Nav() {
  const NavName = [
    {
      name: 'Trang Chủ',
      icon: <FaHome />,
      slug: 'trang-chu',
      link: '/',
    },
    {
      name: 'Lịch Hẹn',
      icon: <MdQrCodeScanner />,
      slug: 'lich-hen',
      link: '/lich-hen',
    },
    {
      name: 'Quét Mã',
      icon: <MdQrCodeScanner />,
      slug: 'quet-ma',
      link: '/quet-ma',
    },
    {
      name: 'Đặt Lịch',
      icon: <BsCalendarCheck />,
      slug: 'dat-lich',
      link: '/dat-lich',
    },
  ];
  const router = useRouter();
  const { width } = useWindowSize();
  return (
    <div className={styles.nav}>
      <ul>
        {NavName?.map((data, index) => (
          <li key={index} className={clsx(styles.NavLi)}>
            <Link href={data.link}>
              <span
                className={clsx(styles.items, {
                  [styles.active]:
                    router.asPath == `${data.link}` ||
                    router.route == `${data.link}` ||
                    router.route == `${data.link}/[slug]`,
                })}
              >
                {width <= 600 ? <>{data?.icon}</> : <>{data.name}</>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
