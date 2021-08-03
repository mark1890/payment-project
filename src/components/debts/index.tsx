import React from 'react';
import styles from './Debts.module.css';
import Link from 'next/link';

export default function Debts() {
  return (
    <div className={styles.container}>
      <h3>Debts</h3>
      <div className={styles.container__list}>
        <ul>
          <li>Debt 1</li>
          <li>Debt 2</li>
          <li>Debt 3</li>
          <li>Debt 4</li>
          <li>Debt 5</li>
          <li>Debt 6</li>
          <li>Debt 7</li>
          <li>Debt 8</li>
          <li>Debt 9</li>
        </ul>
      </div>
      <div className={styles.button}>
        <button type="button">
          <Link href="/costumer"> Back</Link>
        </button>
      </div>
    </div>
  );
}
