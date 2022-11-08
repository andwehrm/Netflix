import React from 'react'
import './responsiveInput.css'

function checkEmail(value){
  if(value.length > 1 && value.length < 5)
    return 'Die E-Mail-Adresse ist erforderlich';

  if( !value.includes('.') || !value.includes('@'))
    return 'Bitte geben sie eine gültige E-Mail-Adresse ein';

  return '';
}

export default function ResponsiveInput(props) {
  const ref = React.useRef('');

  function mailChanged(event){
    props.setValue(event.target.value);

    switch(props.type){
      case 'email':
        ref.current = checkEmail(props.value);
        break;
      default:
        ref.current = '';
        break;
      }
  }

  return ( 
    <div className='responsiveInputContainer'>
        <input className='responsiveInput' onChange={mailChanged} 
               id={props.id} placeholder={props.placeholder} value={props.value}
               style={ref.current ? {  borderBottomColor: '#ffa00a', borderBottomWidth: '2px'} : { borderBottomWidth: '0px'} } >
        </input>
        <div ref={ref} className='responsiveInputError' style={ref.current ? {display: ''} :{ display: 'none'} }>
          {ref.current}
        </div>
    </div>
  )
}
