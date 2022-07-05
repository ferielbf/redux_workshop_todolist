import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {del} from '../redux/Action'
import {check} from '../redux/Action'
function Tasks() {
  const dispatch = useDispatch()
  const [show,setShow] = useState(false)
  const task = useSelector(state =>state.toDoList )
  const HandlerDispatch= (id)=>{
   dispatch(del(id))} 
   const CheckDispatch= ()=>{
    setShow(!show)
  }
   
  
  return (
    <div>
      {task?.map(el => <div>{el.title} 
            <Button onClick={()=>HandlerDispatch(el.id)} class='b' variant={show ? "danger" : "danger"}><i class="fas fa-trash-alt"></i></Button>
            <Button onClick={()=>CheckDispatch()} class='b' variant={show ? "secondary" : "success"}><i class="fas fa-check-circle"></i></Button></div>)}    
    </div>
  )
} 

export default Tasks