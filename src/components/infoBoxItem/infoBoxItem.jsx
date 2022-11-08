import React from 'react'
import './infoBoxItem.css'

export default function InfoBoxItem(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
        <li className='infoBoxItem'>
            <button onClick={ () => { setOpen(!open) }}>
                { props.title }
            </button>
            
            <div className={open ? 'infoBoxContent__open' : 'infoBoxContent__closed'}>
                <span className='infoBoxText'>{props.content}</span>
            </div> 
            
        </li>
    </>
  )
}
