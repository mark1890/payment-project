import React from 'react';
import styles from './Payments.module.css';
import Link from 'next/link';

export default function Payments() {
  return (
    <div className={styles.container}>
      <h3>Payments</h3>
      <div className={styles.container__list}>
        <ul>
          <li>
            <Link href="/payment"> Payment 1</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 2</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 3</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 4</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 5</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 6</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 7</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 8</Link>
          </li>
          <li>
            <Link href="/payment"> Payment 9</Link>
          </li>
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
