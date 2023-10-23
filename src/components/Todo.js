import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const todo = ({task,toggleComplete,deleteTask}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon className='delete-icon' icon = {faTrash} onClick = {() => deleteTask(task.id) }/>
      </div>
      
    </div>
  )
}

export default todo
