import React from 'react'
import MailRegister from '../mailRegister/mailRegister'
import './titledMailRegister.css'

export default function TitledMailRegister(props) {
  return (
    <div className='titledMailRegister'>
        <div className='titledMailRegisterTitle'>
            {props.title && <h1>{props.title}</h1> }
            {props.subtitle && <h2>{props.subtitle}</h2> }
            {props.subline && <h3>{props.subline}</h3> }
        </div>

        <MailRegister {...props}/>

    </div>
  )
}
