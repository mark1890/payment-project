import React from 'react';
import styles from './Costumer.module.css';

import Link from 'next/link';

export default function Costumer() {
  return (
    <div className={styles.container}>
      <article className={styles.titles}>
        <h3>Costumer</h3>
      </article>
      <div className={styles.container__info}>
        <h4>Marco Mora</h4>
        <h4>ID: 1</h4>
        <h4>Total debt: $200</h4>
        <h4>Cellphone: 8888-8888</h4>
        <h4>Email: example@gmail.com</h4>
        <h4>Total payments: $50</h4>
        <div className={styles.info}>
          <h4>
            <Link href="/debts">Debts</Link>
          </h4>
          <h4>
            <Link href="/payments">Payments</Link>
          </h4>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="button">
          <Link href="/add-debt">Add Debt</Link>
        </button>
        <button type="button">
          <Link href="/add-payment">Add Payment</Link>
        </button>
      </div>
    </div>
  );
}
