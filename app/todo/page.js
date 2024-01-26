'use client';
import Header from "../[ components ]/header";
import styles from "./todo.module.css";
import TodoDiv from '../[ components ]/todoDiv';
import TodoDivChecked from '../[ components ]/todoDivChecked';
import AddTodo from "../[ components ]/addTodo";
import DeleteTodo from "../[ components ]/deleteTodo";
import { useState, useEffect } from "react";

export default function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['Lavar as mãos']);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [name, setName] = useState('')
  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('name');
      setName(storedName || ''); // Set to an empty string if localStorage item is null
    }
  }, []);

  const markAsCompleted = (index) => {
    const taskToMark = tasks[index];
  
    if (taskToMark.trim() === '') {
      return;
    }
  
    if (completedTasks.includes(taskToMark)) {
      const updatedCompletedTasks = completedTasks.filter((task) => task !== taskToMark);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      setCompletedTasks([...completedTasks, taskToMark]);
    }
  
    if (index >= 0 && index < tasks.length) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };
  
  

 
  const deleteTask = ({ index, isCompleted }) => {
    if (isCompleted) {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  
    setOnDelete(false);
  };
  
  
  

  const handleIsOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <Header name={name} />
      <main className={styles.main}>
        <div className={`${styles.todo} ${isOpen ? styles.blur : ''}`}>
          <h4>Suas tarefas de hoje</h4>
          <TodoDiv
            markAsCompleted={markAsCompleted}
            tasks={tasks}
            onDelete={(index) => setOnDelete(() => deleteTask(index, false))}
            setOnDelete={setOnDelete}
          />
          <div className={styles.finalizadas}>
            <h4>Tarefas finalizadas</h4>
          </div>
          <TodoDivChecked
            markAsCompleted={(index) => markAsCompleted(index, true)}
            completedTasks={completedTasks}
            onDelete={(index) => setOnDelete(() => deleteTask({ index, isCompleted: true }))}
            setOnDelete={setOnDelete}
            />
        </div>
        <div>
          <button onClick={handleIsOpen}>Adicionar nova Tarefa</button>
        </div>
      </main>
      <div className={`${styles.hiddeModal} ${isOpen ? styles.showModal : ''}`}>
        <AddTodo
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className={`${styles.hiddeModal} ${onDelete ? styles.showModal : ''}`}>
        <DeleteTodo onDelete={() => deleteTask(onDelete)} setOnDelete={setOnDelete} handleDelete={deleteTask} />
      </div>
    </div>
  );
}
