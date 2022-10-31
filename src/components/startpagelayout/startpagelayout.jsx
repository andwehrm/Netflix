import './startpagelayout.css';
import React from 'react';

export default function Startpagelayout(props) {
  return (
    <div className='pageLayout'>
        {React.Children.map(props.children, (child) => {          
         return ( 
         <>
         {child} 
         <hr className='pageDivider'></hr> 
         </> 
         )  
        })}
    </div>
  )
}
