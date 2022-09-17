import { Grid } from '@mui/material';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { multiStepContext } from '../context';
import Location from './step1';
import Services from './step2';
import Staff from './step3';
import Time from './step4';
import Information from './step5';
import styles from './styles.module.scss';
import { GoLocation } from 'react-icons/go';
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineCalendar,
} from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';

export default function Step() {
  const component = [
    { name: 'Đia điểm', icon: <GoLocation /> },
    { name: 'Dịch vụ', icon: <AiOutlineHeart /> },
    { name: 'Nhân viên', icon: <AiOutlineUser /> },
    { name: 'Thời gian', icon: <AiOutlineCalendar /> },
    { name: 'Thông tin', icon: <BsFillJournalBookmarkFill /> },
  ];
  const context = useContext(multiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 0:
        return <Location />;
      case 1:
        return <Services />;
      case 2:
        return <Staff />;
      case 3:
        return <Time />;
      case 4:
        return <Information />;
    }
  };
  return (
    <div className={styles.Step}>
      <div className={styles.tab}>
        <Grid container className={styles.tabs}>
          {component?.map((data, index) => (
            <Grid
              item
              xs={2}
              key={index}
              className={clsx(styles.item, {
                [styles.active]: context.currentStep < index,
                [styles.active1]: context.currentStep === index,
              })}
              // onClick={() => context.setStep(index)}
            >
              {data.icon} {data.name}
            </Grid>
          ))}
        </Grid>
      </div>
      {showStep(context.currentStep)}
    </div>
  );
}
