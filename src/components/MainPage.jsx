import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {add} from '../redux/Action'

function MainPage() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const task = useSelector(state =>state.toDoList )
  const HandleDispatch= (e)=>{
    dispatch(add({title:value,id:task.length+1,isDone:false}))
    e.target.previousSibling.value = ""
  }
  
  return (
    <div>
     <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Type Here"
              className="me-2"
              aria-label="Enter"
             onChange= {e=> setValue(e.target.value)}
            />
            <Button onClick={(e)=>HandleDispatch(e)} class='b' variant="outline-success">Check</Button>
          </Form>
    </div>
  )
}

export default MainPage