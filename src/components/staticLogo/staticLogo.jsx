import React from 'react'
import './staticLogo.css'

export default function StaticLogo(props) {
  return (
    <React.Fragment>     
        <img className='staticLogo' src='images/logo.png' alt=''></img>
    </React.Fragment>
  )
}
