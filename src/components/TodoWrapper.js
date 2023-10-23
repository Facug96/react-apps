import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid';

uuidv4()

const TodoWrapper = () => {
  const [tasks,setTasks] = useState([])

  
  const addTask = (task) =>{
    setTasks([...tasks,{id: uuidv4(),task: task,
      completed: false}])
    }
    const toggleComplete = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task ));
    }
    const deleteTask = (id) => {setTasks(tasks.filter((task) => task.id !== id))}
    console.log(tasks)
  return (
    <div className='TodoWrapper'>
      <TodoForm addTask = {addTask}/>
      {tasks.map(
        (task) => ( 
          (<Todo 
              task={task} 
              key = {task.id}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              /> ))
      )}
    </div>
  )
}

export default TodoWrapper
