import { Button, Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import clsx from 'clsx';
import { BsSunrise, BsSun, BsSunset } from 'react-icons/bs';
import { multiStepContext } from '../../context';
import BasicModal from './warning/Modal';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useEffect } from 'react';
import moment from 'moment';
import Btn from './button';

export default function Time() {
  const time = [
    {
      name: 'buổi sáng',
      list: ['9:00', '9:30', '10:00', '10:30', '11:00', '12:00', '12:30'],
      icon: <BsSunrise />,
    },
    {
      name: 'buổi chiều',
      list: ['13:00', '13:30', '14:00', '14:30', '15:00', '16:00'],
      icon: <BsSun />,
    },
    {
      name: 'buổi tối',
      list: ['18:00', '18:30', '19:00'],
      icon: <BsSunset />,
    },
  ];
  const { setStep, setTime, setDate } = useContext(multiStepContext);
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState('');
  useEffect(() => {
    setTime(times);
    setDate(moment(value).format('DD/MM/YYYY'));
  }, [times, value]);
  return (
    <div className={styles.Time}>
      <div className={styles.body}>
        <h3>Mời Bạn Chọn Lịch Hẹn</h3>
        <div className={styles.taskbar}>
          <div className={styles.back}>
            <MdArrowBackIosNew onClick={() => setStep(2)} />
          </div>
          <div className={styles.title}>Chọn Ngày</div>
        </div>
        <Grid container className={styles.Grid}>
          <Grid item xs={12} sm={5} md={5} className={styles.calendar}>
            <div className={styles.slected1}>Chọn ngày</div>
            <Calendar
              calendarType="ISO 8601"
              minDate={new Date()}
              locale="vi-VN"
              onChange={onChange}
              value={value}
              className={styles.react_calendar}
            />
          </Grid>
          <div className={styles.boder}></div>
          <Grid item xs={12} sm={6} md={6} className={styles.selectTime}>
            <div className={styles.slected2}>Chọn Thời Gian</div>
            {time?.map((data, index) => (
              <div key={index} className={styles.mrb1}>
                <div className={styles.nameTime}>
                  {data.icon}
                  {data.name}
                </div>
                <Grid container className={styles.morning}>
                  {data.list.map((i, e) => (
                    <Grid
                      item
                      xs={2}
                      className={clsx(styles.TimeMorning, {
                        [styles.active]: times === i,
                      })}
                      key={e}
                      onClick={() => setTimes(i)}
                    >
                      {i}
                    </Grid>
                  ))}
                </Grid>
              </div>
            ))}
          </Grid>
        </Grid>
        <Btn setOpen={setOpen} value={value} times={times} setStep={setStep} />
      </div>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}
