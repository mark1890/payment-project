import React from 'react';
import styles from './Debt.module.css';
import Link from 'next/link';

export default function Debt() {
  return (
    <div>
      <div className={styles.container}>
        <h3>Debt 1</h3>
        <div className={styles.container__list}>
          <div className={styles.fisrt__description}>
            <h4>Date: 21/7/2021</h4>
            <h4>Amount: $200</h4>
          </div>
          <article>
            <p>Compra de un yate por $100</p>
          </article>
        </div>
        <div className={styles.button}>
          <button type="button">
            <Link href="/debts"> Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
