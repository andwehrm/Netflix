import React from 'react'
import Badge from '../badge/badge'
import './adBanner.css'

export default function AdBanner() {
  return (
    <div className='adBanner'>
        <Badge text='Neu!'></Badge>
        <span className='adBanner__text'>Abos jetzt schon ab</span>
        <span className='adBanner__amount'>4,99€</span> 
        <span className='adBanner__text'>.</span>
        <a className='adBanner__link' href='http://localhost:3000'>Weitere Infos &gt;</a>
    </div>
  )
}
