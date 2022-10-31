import React from 'react'
import InfoBox from '../infoBox/infoBox'
import MailRegister from '../mailRegister/mailRegister'
import './infoBoxRegister.css'


export default function InfoBoxRegister() {
  return (
    <div className='infoBoxRegister'>
        <InfoBox/>
        <MailRegister/>
    </div>
  )
}
