import React from 'react';
import styles from './Payment.module.css';
import Link from 'next/link';

export default function Payment() {
  return (
    <div>
      <div className={styles.container}>
        <h3>Payment 1</h3>
        <div className={styles.container__list}>
          <h4>Date: 29/7/2021</h4>
          <h4>Amount: $20</h4>
          <article>
            <p>Pago de yate por $20</p>
          </article>
        </div>
        <div className={styles.button}>
          <button type="button">
            <Link href="/payments">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
