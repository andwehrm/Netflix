import React from 'react'
import './mailRegister.css'

export default function MailRegister(props) {
  let inputid = 'input' + props.context + '_id' || 'defaultMailRegisterInput';

  return (
    <div className='mailRegister'>
        <input id={inputid} placeholder='E-Mail-Addresse'></input>
        <div className='mailRegisterButton'>
          <button>
            <span>Loslegen &gt;</span>
          </button>
        </div>
    </div>
  )
}
