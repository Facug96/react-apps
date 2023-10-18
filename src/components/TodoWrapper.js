import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid';

uuidv4()

const TodoWrapper = () => {
  const [tasks,setTasks] = useState([])

  
  const addTask = (task) =>{
    console.log(tasks)
    setTasks([...tasks,{id: uuidv4(),task: task,
      completed: false, isEditing: false}])
      console.log(tasks)
    }
    const toggleComplete = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...tasks,completed: !task.completed}: task ))
    }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTask = {addTask}/>
      {tasks.map(
        (task) => (task.isEditing ? 
          (<Todo task = {<p></p>} key = {task.id}/>) : 
          (<Todo task={task} 
              key = {task.id}
              toggleComplete={toggleComplete}
              />))
      )}
    </div>
  )
}

export default TodoWrapper
