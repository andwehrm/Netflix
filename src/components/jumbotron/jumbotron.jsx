import './jumbotron.css';

export default function Jumbotron(props) {
    return (  
        <div className="jumbotron">
            <div className='card_container'>
                <div className='jumbo_card' style={ props.textleft ? { order: '2'  } : { order: '1' }}>
                    <h1> {props.header}</h1>
                    <h2> {props.text}</h2>
                </div>
                <div className='jumbo_card' style={ props.textleft ? { order: '1'  } : { order: '1' }}>            
                    <img src={props.imgsrc} alt=''></img> 
                </div>
            </div>
        </div>
    );
}