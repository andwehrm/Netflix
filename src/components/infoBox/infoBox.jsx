import React from 'react'
import InfoBoxItem from '../infoBoxItem/infoBoxItem'
import './infoBox.css'

export default function InfoBox(props) {

  const infoBoxItems = props.questions.map(question => {
    return <InfoBoxItem key={question.id} id={question.id} title={question.question} content={question.awnser} />   
  })

  return (
    <div className='infoBox'>
        <h1>{props.title}</h1>
        <ul>
          {infoBoxItems}
        </ul>
    </div>
  )
}
