import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import MediaCard from './card';
import { Button, Grid } from '@mui/material';
import { multiStepContext } from '../../context';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import BasicModal from './warning/Modal';
import { MdArrowBackIosNew } from 'react-icons/md';
import Btn from './Button';

export default function Staff() {
  const { setStep, setStaffcontext } = useContext(multiStepContext);
  const [open, setOpen] = useState(false);
  const [staff, setStaff] = useState([]);
  const [book, setBook] = useState();
  useEffect(() => {
    setStaffcontext(book?.data.name);
    listStaff();
  }, [book]);
  const listStaff = async () => {
    async function Staff() {
      const staff = await axios.get('http://localhost:5000/staff');
      setStaff(staff.data);
    }
    Staff();
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  };

  return (
    <div className={styles.staff}>
      <div className={styles.body}>
        <div className={styles.taskbar}>
          <div className={styles.back}>
            <MdArrowBackIosNew onClick={() => setStep(1)} />
          </div>
          <div className={styles.title}>Chọn Chuyên Viên</div>
        </div>
        <div className={styles.list}>
          <Slider {...settings} className={styles.slider}>
            {staff?.map((data, index) => (
              <div className={styles.item} key={index}>
                <MediaCard data={data} setBook={setBook} book={book} />
              </div>
            ))}
          </Slider>
        </div>
        <Grid container className={styles.mobile}>
          {staff?.map((data, index) => (
            <Grid item xs={6} sm={6} md={6} className={styles.item} key={index}>
              <MediaCard data={data} setBook={setBook} book={book} />
            </Grid>
          ))}
        </Grid>
        <Btn setOpen={setOpen} book={book} setStep={setStep} />
      </div>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}
