import React from 'react'
import './imageBackground.css'

export default function ImageBackground(props) {
  let height = props.height || '750px';
  let gradientHeight = (props.height + 3)*-1 || '-753px';

  return (
       <div className='imageBackground' style={{height: height}}>
            <img src={props.img} alt={props.alt} style={{height: height}}></img>
            <div className='imageBackgroundGradient' style={{height: props.height, top: gradientHeight}}></div>
            <div className='imageBackgroundContent'>
              <h1>Unbegrenzt Filme, Serien und mehr</h1>
              <h2>Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar.</h2>
            </div>
        </div>
  )
}
