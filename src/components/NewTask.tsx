import { ChangeEvent, FormEvent, useState } from 'react';
import plusImg from '../assets/plus.svg';

import styles from './NewTask.module.css'

interface NewTaskProps {
  newTask: (title: string) => void;
}

export function NewTask({ newTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    newTask(newTaskText);

    setNewTaskText('');
  }

  return (
    <form className={styles.container} onSubmit={handleCreateNewTask}>
      <input type="text" value={newTaskText} placeholder="Adicione uma nova tarefa" onChange={handleNewTaskChange} />
      <button type='submit'>
        Criar
        <img src={plusImg} />
      </button>
    </form>
  )
}
