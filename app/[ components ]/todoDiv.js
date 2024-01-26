import styles from './todoDiv.module.css';
import Image from 'next/image';

export default function TodoDiv({ onDelete, setOnDelete, tasks, markAsCompleted }) {
  return (
    <div className={styles.todoMain}>
      {tasks.map((task, index) => (
        <div className={styles.todoDiv} key={index}>
          <input
            type={'checkbox'}
            onChange={() => markAsCompleted(index, false)}
            className={styles.checkbox}
          />
          <p>{task}</p>
          <Image 
            src="/trashIcon.svg"
            onClick={() => setOnDelete({index, isCompleted: false})}
            width={30}
            height={30}
            alt="Ícone de lixo para deletar tarefa"
          />
        </div>
      ))}
    </div>
  );
}
