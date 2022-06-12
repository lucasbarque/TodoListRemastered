import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  title: string;
  isCompleted: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

export function Task({ title, isCompleted = false, onComplete, onDelete }: TaskProps) {
  const [isComplete, setIsComplete] = useState(isCompleted);

  function handleToggleTaskStatus() {
    setIsComplete(!isComplete);
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.checkbox} ${isComplete && styles.checkChecked}`}
        onClick={handleToggleTaskStatus}
      ></div>
      <div className={`${styles.text} ${isComplete && styles.textChecked}`}>
        {title}
      </div>
      <div className={styles.delete}>
        <Trash size={20} />
      </div>
    </div>
  );
}
