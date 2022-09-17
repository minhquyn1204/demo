import React, { useContext, useEffect, useState } from 'react';
import { Card, debounce, TextField } from '@mui/material';
import axios from 'axios';
import { GoLocation } from 'react-icons/go';
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai';
import clsx from 'clsx';
import styles from './styles.module.scss';
import {
  checkIfAIsInB,
  checkIfCIsInD,
  ConvertViToEn,
} from '../../../../../lib';
import { multiStepContext } from '../../../context';

export default function ListCard({ setMap, setDataLocation }) {
  const { setAddress } = useContext(multiStepContext);
  const [searchTerm, setSearchTerm] = useState('');
  const Butons = [
    { name: 'Tất cả' },
    { name: 'Nổi Tiếng' },
    { name: 'Gần Nhất' },
  ];
  const star = [
    { stars: <AiFillStar /> },
    { stars: <AiFillStar /> },
    { stars: <AiFillStar /> },
    { stars: <AiFillStar /> },
    { stars: <AiFillStar /> },
  ];
  const [locations, setLocations] = useState([]);
  const [sorts, setSorts] = useState('Tất cả');
  const [cardId, setCardId] = useState(0);
  const handleSort = (data) => {
    setSorts(data.name);
  };

  const handleClick = (data) => {
    setCardId(data.id);
  };
  const filteredservice = locations?.filter((data) => {
    return searchTerm.length === 0
      ? true
      : checkIfCIsInD(
          ConvertViToEn(searchTerm),
          ConvertViToEn(data.data.name)
        ) ||
          checkIfAIsInB(
            ConvertViToEn(searchTerm),
            ConvertViToEn(data.data.address)
          );
  });
  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    handle();
  }, [cardId]);
  const handle = () => {
    async function Location() {
      const locations = await axios.get('http://localhost:5000/Location');
      const map = locations.data.filter((item) => item.data.id === cardId);
      setDataLocation(map);
      setAddress(map);
      setLocations(locations.data);
      setMap(map[0]?.data.map);
    }
    Location();
  };
  return (
    <div>
      <div className={styles.ButtonSort}>
        {Butons?.map((data, index) => (
          <div
            size="small"
            key={index}
            className={clsx(styles.Buttons, {
              [styles.active]: sorts === data.name,
            })}
            onClick={() => handleSort(data)}
          >
            <span
              className={clsx(styles.borderButton, {
                [styles.active]: sorts === data.name,
              })}
            ></span>
            <div className={styles.nameSort}>{data.name}</div>
          </div>
        ))}
        <span className={styles.sortby}>
          Sort by:<span style={{ color: '#006c4e' }}>{sorts}</span>
        </span>
      </div>
      <TextField
        size="small"
        sx={{
          width: '93%',
          margin: '0 auto',
          padding: '0 10px',
        }}
        placeholder="Nhập từ khoá tìm kiếm"
        type="search"
        onChange={debounce(handleSearchTermChange, 250)}
      />
      <div className={styles.listCard}>
        {filteredservice?.map((data, index) => (
          <Card
            key={index}
            className={clsx(styles.cards, {
              [styles.active]: cardId === data.data.id,
            })}
            onClick={() => handleClick(data.data)}
          >
            <div className={styles.Card}>
              <div className={styles.img}>
                <img src={data.data.img} alt="img a" />
              </div>
              <div className={styles.content}>
                <h5 className={styles.title_page}>{data.data.name}</h5>
                <div className={styles.address}>
                  <GoLocation />
                  {data.data.address.length > 40 ? (
                    <>{`${data.data.address.slice(0, 40)}...`}</>
                  ) : (
                    <>{data.data.address}</>
                  )}
                </div>
                <div className={styles.desc}>
                  <div className={styles.text1}>
                    <span className={styles.d1}>Thân thiện</span>
                  </div>
                  <div className={styles.text2}>
                    <span className={styles.d2}>Chuyên nghiệp</span>
                  </div>
                </div>
                <div className={styles.start}>
                  <span style={{ fontSize: 20 }}>{data.data.star}.0 </span>
                  {star.map((e, i) => (
                    <span
                      className={clsx(styles.svg, {
                        [styles.active]: i + 1 <= data.data.star,
                      })}
                      key={i}
                    >
                      {e.stars}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
