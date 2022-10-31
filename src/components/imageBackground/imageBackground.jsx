import React from 'react'
import './imageBackground.css'

export default function ImageBackground(props) {
  let height = props.height || '750px';
  let gradientHeight = (props.height + 3)*-1 || '-753px';

  return (
       <div className='imageBackground' style={{height: height}}>
            <img src={props.img} alt={props.alt} style={{height: height}}></img>
            <div style={{height: props.height, top: gradientHeight}}></div>
        </div>
  )
}
