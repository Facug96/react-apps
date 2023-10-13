import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const todo = ({task,toggleComplete}) => {
  return (
    <div className='Todo'>
      <p className = {`${task.completed ? 'completed' :
      ""}`} onClick={()=>{toggleComplete(task.id)}}>{task.task} </p>
      <div>
        <FontAwesomeIcon icon ={faPenToSquare} />
        <FontAwesomeIcon icon = {faTrash} />
      </div>
      
    </div>
  )
}

export default todo