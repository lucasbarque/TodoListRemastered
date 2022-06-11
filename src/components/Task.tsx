import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  const isChecked = false;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.checkbox} ${isChecked && styles.checkChecked}`}
      ></div>
      <div className={`${styles.text} ${isChecked && styles.textChecked}`}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </div>
      <div className={styles.delete}>
        <Trash size={20} />
      </div>
    </div>
  );
}
