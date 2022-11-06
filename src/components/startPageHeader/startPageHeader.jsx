import React from 'react'
import ImageBackground from '../imageBackground/imageBackground'
import TitledMailRegister from '../titledMailRegister/titledMailRegister'
import StaticLogo from '../staticLogo/staticLogo'
import './startPageHeader.css'
import StaticHeader from '../staticHeader/staticHeader'
import LanguagePicker from '../languagePicker/languagePicker'
import LoginButton from '../loginButton/loginButton'

export default function StartPageHeader() {
  return (
    <div className='startPageHeader'>
        <StaticLogo/>
        <StaticHeader>
          <LanguagePicker/>
          <LoginButton/>
        </StaticHeader>
        <ImageBackground img='images/header.jpeg' alt='' height={800}>
          <TitledMailRegister context='header'
                              title='Unbegrenzt Filme, Serien und mehr'
                              subtitle='Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar.'
                              subline='Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren.'>
          </TitledMailRegister>
        </ImageBackground>
    </div>
  )
}
