import React from 'react'
import './Text.css'

export default function Text({ text, fontSize, textColor, textAlign }) {
  return (
    <h1 
      className='textname' 
      style={{
        fontSize: fontSize, 
        color: textColor, 
        textAlign: textAlign
      }}
    >
      {text}
    </h1>
  )
}
