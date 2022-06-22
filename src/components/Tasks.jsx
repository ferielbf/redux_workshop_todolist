import React from 'react'
import { Button } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {del} from '../redux/Action'
function Tasks() {
  const dispatch = useDispatch()
  const task = useSelector(state =>state.toDoList )
  const HandlerDispatch= (id)=>{
   dispatch(del(id))
  } 
  return (
    <div>
      {task?.map(el => <div>{el.title} 
            <Button onClick={()=>HandlerDispatch(el.id)} class='b' variant="outline-success">Delete</Button></div>)}
      
    </div>
  )
} 

export default Tasks