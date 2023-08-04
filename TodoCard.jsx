import React from 'react'
import  classes from './TodoCard.module.css'

const TodoCard = ({ task }) => {
  return (
    <div className={classes.TodoCard}>
<h5>{task.title}</h5>
    </div>
  )
}

export default TodoCard