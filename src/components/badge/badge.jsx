import React from 'react'
import './badge.css'

export default function Badge(props) {
  return (
    <div className='badge'>
        {props.text}
    </div>
  )
}
