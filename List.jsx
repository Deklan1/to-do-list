import React from 'react'
import TodoCard from './TodoCard'

const List = ({ list }) => {
  return (
    <div>
        {list.map(task => <TodoCard task={task} />)}
    </div>
  )
}

export default List