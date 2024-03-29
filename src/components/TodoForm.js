import React, {useState} from 'react'

const TodoForm = ({addTask}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();

    addTask(value);
    
    setValue("");
  }
  return (
    <form className = 'TodoForm' onSubmit = {handleSubmit}>
      <input type = "text" className='todo-input' value = {value} placeholder='Agregar Tarea' onChange = {(e) => setValue(e.target.value)}>
      </input>
      <button type='submit' className='todo-btn'>
        +
      </button>
    </form>
  )
}

export default TodoForm
