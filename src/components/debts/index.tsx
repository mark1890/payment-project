import React from 'react';
import styles from './Debts.module.css';
import Link from 'next/link';

export default function Debts() {
  return (
    <div className={styles.container}>
      <h3>Debts</h3>
      <div className={styles.container__list}>
        <ul>
          <li>
            <Link href="/debt"> Debt 1</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 2</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 3</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 4</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 5</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 6</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 7</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 8</Link>
          </li>
          <li>
            <Link href="/debt"> Debt 9</Link>
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
