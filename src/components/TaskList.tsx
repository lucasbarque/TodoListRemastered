import styles from './TaskList.module.css';

import isEmptyImg from '../assets/is-empty.svg';

import { Task } from './Task';
import { NewTask } from './NewTask';

export function TaskList() {
  const isEmptyTask = false;
  return (
    <>
      <NewTask />
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
      <div className={styles.taskList}>
        {!isEmptyTask ? (
          <>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </>
        ) : (
          <div className={styles.emptyTasks}>
            <img src={isEmptyImg} alt='Ícone task vazia' />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </>
  );
}
