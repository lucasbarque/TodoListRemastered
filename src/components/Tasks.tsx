import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.titlePrimary}>Tarefas criadas</div>
        <div className={styles.badge}>5</div>
      </div>

      <div>
        <div className={styles.titleSecondary}>Concluídas</div>
        <div className={styles.badge}>2 de 5</div>
      </div>
    </div>
  );
}
