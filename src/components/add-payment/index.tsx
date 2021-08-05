import React from 'react';
import styles from './AddPayment.module.css';
import Link from 'next/link';

export default function AddDebt() {
  return (
    <div className={styles.container}>
      <div className={styles.container__info}>
        <div className={styles.container__card}>
          <h3>Add Payment</h3>
          <h4 className={styles.date}>Date: 27-7-2021</h4>
          <h4 className={styles.amount}>Amount: $35</h4>
          <article className={styles.article}>
            <h4>Description</h4>
            <p>Se paga $35 por el pago de una patineta</p>
          </article>
        </div>
        <div className={styles.button}>
          <button type="button">
            <Link href="/costumer">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
