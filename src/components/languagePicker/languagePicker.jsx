import React from 'react'
import './languagePicker.css'

export default function LanguagePicker() {
  return (
    <div className='languagePicker'>
        <select>
            <option value='de'>Deutsch</option>
            <option value='en'>English</option>
        </select>
    </div>
  )
}
