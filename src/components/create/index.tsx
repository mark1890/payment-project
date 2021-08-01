import React from 'react';
import styles from './Create.module.css';

export default function Create() {
  return (
    <div className={styles.container}>
      <div className={styles.container__form}>
        <h3>New Costumer</h3>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>ID:</label>
          <input type="text" name="id" />
          <label>Cellphone:</label>
          <input type="text" name="cellphone" />
          <label>Address:</label>
          <input type="text" name="address" />
          <label>Debt:</label>
          <input type="number" name="debt" />
          <label>Email:</label>
          <input type="text" name="email" />
        </form>
        <div className={styles.container__buttons}>
          <button type="button">Cancel</button>
          <button type="button">Create</button>
        </div>
      </div>
    </div>
  );
}
