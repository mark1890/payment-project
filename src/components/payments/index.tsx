import React from 'react';
import styles from './Payments.module.css';
import Link from 'next/link';

export default function Payments() {
  return (
    <div className={styles.container}>
      <h3>Payments</h3>
      <div className={styles.container__list}>
        <ul>
          <li>Payment 1</li>
          <li>Payment 2</li>
          <li>Payment 3</li>
          <li>Payment 4</li>
          <li>Payment 5</li>
          <li>Payment 6</li>
          <li>Payment 7</li>
          <li>Payment 8</li>
          <li>Payment 9</li>
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
