import styles from './todoDivChecked.module.css';
import Image from 'next/image';

export default function TodoDivChecked({ onDelete, setOnDelete, completedTasks, markAsCompleted }) {
  return (
    <div className={styles.todoMain}>
      {completedTasks.map((completedTask, index) => (
        <div className={styles.todoDiv} key={index}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={true}
            onChange={() => markAsCompleted(index)}
            id={`completedTask-${index}`}
          />
          <label htmlFor={`completedTask-${index}`}>
            <p>{completedTask}</p>
          </label>
          <Image
            src="/trashIcon.svg"
            onClick={() => setOnDelete({index, isCompleted: true})}
            width={30}
            height={30}
            alt="Ícone de lixo para deletar tarefa"
          />
        </div>
      ))}
    </div>
  );
}
