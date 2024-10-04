import React from 'react'
import './Button.css'

export default function Button({text, bgColor, width, height}) {
  return (
    <button style={{
        backgroundColor: bgColor, 
        width: width, 
        height: height,
        border: 'none',
        color: 'white',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {text}
      </button>
  )
}
