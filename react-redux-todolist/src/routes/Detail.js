import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Detail() {
  const id = useParams()
  const toDos = useSelector((state) => state)
  
  const toDoText = toDos.find((todo) => todo.id === parseInt(id.id))


  return (
    <div>{toDoText.text}</div>
  )
}

export default Detail