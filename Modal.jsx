import React, { useState } from 'react'
import classes from './modal.module.css'
import Button from './Button'
import Input from './Input'



const Modal = ({ handleShow, addFunction, addTask }) => {
   
    const [ text, setText ] = useState ();
    const handleChangeText = (textInput) => {
      setText(textInput)
    }
 
  return (
    <React.Fragment>
    <div className={classes.modalWrapper}></div>
    <div className={classes.modalContent}>
    <Button handleClick={handleShow}>close</Button>
    <Input
     name='add'
      onChangeFunc={addFunction}
      />
    <Button 
    handleClick={addTask}
    > add task </Button>
    </div>
    </React.Fragment>
      )
}

export default Modal


//rafce