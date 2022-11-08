import React from 'react'
import InfoBoxItem from '../infoBoxItem/infoBoxItem'
import './infoBox.css'

export default function InfoBox(props) {

  const infoBoxItems = props.questions.map(question => {
    return <InfoBoxItem title={question.question} content={question.awnser} />   
  })

  return (
    <div className='infoBox'>
        <h1>Häufig gestellte Fragen</h1>
        <ul>
          {infoBoxItems}
        </ul>
    </div>
  )
}
