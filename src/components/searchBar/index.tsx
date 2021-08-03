import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Search costumer..." />
    </div>
  );
}
