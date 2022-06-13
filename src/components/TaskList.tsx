import styles from './TaskList.module.css';

import isEmptyImg from '../assets/is-empty.svg';

import { Task } from './Task';
import { NewTask } from './NewTask';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function createNewTask(title: string) {
    setTasks([...tasks, { id: uuidv4(), title, isCompleted: false }]);
  }

  function changeTaskStatus(id: string) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    }));
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function getCountOfCompletedTasks() {
    return tasks.filter(task => task.isCompleted).length;
  }

  return (
    <>
      <NewTask newTask={createNewTask} />
      <div className={styles.container}>
        <div>
          <div className={styles.titlePrimary}>Tarefas criadas</div>
          <div className={styles.badge}>{tasks.length}</div>
        </div>

        <div>
          <div className={styles.titleSecondary}>Concluídas</div>
          <div className={styles.badge}>{getCountOfCompletedTasks()} de {tasks.length}</div>
        </div>
      </div>
      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onComplete={changeTaskStatus}
                onDelete={deleteTask}
              />
            ))}
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
