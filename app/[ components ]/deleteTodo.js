import styles from './deleteTodo.module.css';

export default function DeleteTodo({ onDelete, setOnDelete, handleDelete }) {
  return (
    <div>
      <div className={styles.container}>
        <h2>Deletar Tarefa</h2>
        <div className={styles.confirm}>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={styles.buttons}>
            <button onClick={handleDelete} className={styles.delete}>
              Deletar
            </button>
            <button onClick={() => setOnDelete(false)} className={styles.cancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
