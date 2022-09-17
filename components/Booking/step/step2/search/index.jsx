import { debounce, TextField } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

export default function Search({ setSearchTerm }) {
  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className={styles.search}>
      <span className={styles.titleSercives}>Dịch vụ</span>
      <TextField
        type='search'
        size='small'
        placeholder='Tìm Kiếm'
        onChange={debounce(handleSearchTermChange, 250)}
        className={styles.textfield}
      />
    </div>
  );
}
