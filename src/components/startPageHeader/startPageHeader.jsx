import React from 'react'
import ImageBackground from '../imageBackground/imageBackground'
import MailRegister from '../mailRegister/mailRegister'
import StaticLogo from '../staticLogo/staticLogo'
import './startPageHeader.css'

export default function StartPageHeader() {
  return (
    <div className='startPageHeader'>
        <StaticLogo/>
        <ImageBackground img='images/header.jpeg' alt='' height={750}/>
        <MailRegister/>
    </div>
  )
}
