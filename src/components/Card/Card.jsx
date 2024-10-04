import React from 'react'
import './Card.css'
export default function Card({name , price , quantity , desc = 'no desc' , color}) {
  return (
    <div className='card'>
      <h1 className='name1'>name : {name}</h1>
      <h1 className='price'>price : {price}</h1>
      <h2 className='quantity'>quantity : {quantity}</h2>
      <h2 className='desc'>description : {desc}</h2>
      <p className='color'>color : {color}</p>
    </div>
  )
}
