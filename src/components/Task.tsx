import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  }
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  const [isComplete, setIsComplete] = useState(task.isCompleted);

  function handleToggleTaskStatus() {
    setIsComplete(!isComplete);
    onComplete(task.id);
  }

  function handleDeletetask() {
    onDelete(task.id);
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.checkbox} ${isComplete && styles.checkChecked}`}
        onClick={handleToggleTaskStatus}
      ></div>
      <div className={`${styles.text} ${isComplete && styles.textChecked}`}>
        {task.title}
      </div>
      <div className={styles.delete}>
        <Trash size={20} onClick={handleDeletetask} />
      </div>
    </div>
  );
}
