import React from 'react'
import FooterLinkStructure from '../footerLinkStructure/footerLinkStructure'
import LanguagePicker from '../languagePicker/languagePicker'
import './startPageFooter.css'

export default function StartPageFooter(props) {
  return (
    <div className='startPageFooterContainer'>
        <div className='startPageFooter'>
            <h1>Fragen? Einfach anrufen: 0800-000-9677</h1>
            <FooterLinkStructure {...props}/>
            <LanguagePicker/>
            <p>Netflix Deutschland</p>
        </div>
    </div>
  )
}