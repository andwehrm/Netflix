import React from 'react'
import './languagePicker.css'

export default function LanguagePicker() {
  const [language, setLanguage] = React.useState('de')

  return (
    <div className='languagePicker'>
        <select onChange={event => {setLanguage(event.target.value)}} value={language}>
            <option value='de'>Deutsch</option>
            <option value='en'>English</option>
        </select>
    </div>
  )
}
