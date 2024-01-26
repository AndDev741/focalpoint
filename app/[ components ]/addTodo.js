import { useState } from 'react';
import styles from './addTodo.module.css';

export default function AddTodo({ isOpen, setIsOpen, task, setTask, tasks, setTasks }) {
  console.log(tasks);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className={styles.container}>
      <h2>Nova tarefa</h2>
      <div className={styles.form}>
        <label>Título</label>
        <input
          type={'text'}
          placeholder="Digite"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div className={styles.buttons}>
          <button onClick={addTask} className={styles.add}>
            Adicionar
          </button>
          <button onClick={() => setIsOpen(false)} className={styles.cancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
