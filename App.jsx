import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Button from './components/Button';
import List from './components/List';

function App() {


const [ show, setShow ] = useState(false);
const [newTask, setNewTask] = useState('');
const [ list, setTasks] = useState([ 
  {
    id: 1,
    title: 'coding',
    completed: false
  }, 
  {
    id: 2,
    title: 'eat',
    completed: false
  }, 
  {
    id: 3,
    title: 'sleep',
    completed: false
  }, 
  {
    id: 4,
    title: 'coding',
    completed: false
  },
])
const handleShow = () => setShow(!show)

const addNewText = (event) => {
setNewTask(event.target.value)
}
const addTask = () => {
  setTasks((prevState) => [...prevState,
    {id: list.length + 1,
    title: newTask, 
    completed: false 
    }])
}
  return (
    
      <div className="App">
     {show && <Modal 
     addTask={addTask}
     addFunction={addNewText}
     handleShow={handleShow}
      />}

      <Button handleClick={handleShow}>
          add task
      </Button>
      <List list={list} />
      </div>
    
  );
}

export default App;
