import React from 'react';
import styles from './Search.module.css';
import Link from 'next/link';

const costumers = [
  { name: 'Marco Mora', id: 1, debt: 200 },
  { name: 'Aquiles Gonzalez', id: 2, debt: 300 },
  { name: 'Alejandro Magno', id: 3, debt: 600 },
  { name: 'Queen Elizabeth', id: 4, debt: 800 },
];

export default function Search() {
  return (
    <div className={styles.container}>
      <h3>Buscador</h3>
      <div className={styles.container__list}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>ID</th>
              <th>Deuda</th>
            </tr>
          </thead>
          {costumers.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>${item.debt}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className={styles.button}>
          <button type="button">
            <Link href="/create">New Costumer</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
