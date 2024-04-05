import Form from "../components/form/Form/Form";
import Task from "../components/form/Task/Task";
import  { useState, useEffect } from 'react';

function Home(){
const [task, setTask] = useState ('');
const [tasks, setTasks] = useState([]);

useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
    }
}, []);

// При зміні завдань оновлюємо дані в локальному сховищі
// useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }, [tasks]);
useEffect(() => {
    if (tasks.length>0){
        localStorage.setItem('tasks', JSON.stringify(tasks)
    )};
   }, [tasks]);


    const handleChange = (e) =>{
        setTask(e.target.value);
    }
    const addTask = (e)=>{
        e.preventDefault();
        if(task.trim() === ''){
            alert ('Debes agregar algo')
            return
        } 
    const newTask = {
        id: Date.now(),
        task,
        complete: false
    }       
    const totalTask = [newTask, ...tasks]
    setTasks(totalTask);
    setTask('');
    }
    
    const deleteTask  = id =>{
        const updateTasks = tasks.filter(task=>{
            return task.id !== id
        })
        setTasks(updateTasks)
    }

    return(
        <>
        <Form handleChange = {handleChange} addTask = {addTask} task = {task}/>
        {tasks.length>1&&(
            <button onClick={()=>setTasks([])}>Clear tasks</button>
        )}
        {tasks.map(task => (
      <Task
      key = {task.id}
      id = {task.id}
      task = {task}
      deleteTask = {deleteTask}
       />
      ))}
        </>
    )
}
export default Home