import React from 'react'
import './languagePicker.css'

const languages = [
  {
    id: 1,
    name: 'English',
    value: 'en'
  },
  {
    id: 2,
    name: 'Deutsch',
    value: 'de'
  }
]

export default function LanguagePicker() {
  const [language, setLanguage] = React.useState('de')

  const langOptions = languages.map(language => {
    return  <option key={language.id} value={language.value}>{language.name}</option>
  });

  return (
    <div className='languagePicker'>
        <select onChange={event => {setLanguage(event.target.value)}} value={language}>
           {langOptions}
        </select>
    </div>
  )
}
