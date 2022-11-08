import React from 'react'
import ResponsiveInput from '../responsiveInput/responsiveInput';
import './mailRegister.css'



export default function MailRegister(props) {
  const [email, setEmail] = React.useState('')

  let inputid = 'input' + props.context + '_id' || 'defaultMailRegisterInput';
  
  function registerMail(){
    alert('Mail registered: ' + email);
  }

  return (
    <div className='mailRegister'>
        <ResponsiveInput type='email' setValue={setEmail} value={email} id={inputid} placeholder='E-Mail-Addresse'/>
        <div className='mailRegisterButton'>
          <button onClick={registerMail}>
            <span>Loslegen &gt;</span>
          </button>
        </div>
    </div>
  )
}
