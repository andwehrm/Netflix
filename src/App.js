import './App.css';
import Startpagelayout from './components/startpagelayout/startpagelayout';
import Header from './components/header/header';
import Jumbotron from './components/jumbotron/jumbotron'

const jumbos = [
  {
    id: 1,
    imgsrc: '/images/jumbo1.png',
    textleft: true,
    header: 'Auf Ihrem Fernseher',
    text: 'Streamen Sie mit Smart-TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-Player u. v. m.'
  },
  {
    id: 2,
    imgsrc: '/images/jumbo2.png',
    textleft: false,
    header: 'Serien herunterladen und offline genießen',
    text: 'Lieblingstitel ganz leicht speichern und jederzeit ansehen'
  },
  {
    id: 3,
    imgsrc: '/images/jumbo3.png',
    textleft: true,
    header: 'Auf allen Geräten',
    text: 'Sie können unbegrenzt Filme und Serien auf Ihrem Smartphone, Tablet, Laptop und Fernseher ansehen – ohne Extragebühren.'
  },
  {
    id: 4,
    imgsrc: '/images/jumbo4.png',
    textleft: false,
    header: 'Profile für Kinder erstellen',
    text: 'Schicken Sie Kinder auf Abenteuer mit ihren Lieblingsfiguren in einem speziell auf ihre Bedürfnisse abgestimmten Kids-Bereich, der ohne Aufpreis in Ihrer Mitgliedschaft inbegriffen ist.'
  }
]

function App() {
  let i = 0;
  const jumbotrons =  jumbos.map(jumbo => {
    let left = true;
    i += 1;
    if(i % 2)
      left = false;
    return <Jumbotron key={jumbo.id} imgsrc={jumbo.imgsrc} textleft={left} header={jumbo.header} text={jumbo.text} />   
  })

  return (
    <div className="App">

      <Startpagelayout>
       <Header/>
       {jumbotrons}
      </Startpagelayout>
    </div>
  );
}

export default App;
