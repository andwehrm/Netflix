import './App.css';
import DividedLayout from './components/dividedLayout/dividedLayout';
import StartPageHeader from './components/startPageHeader/startPageHeader';
import Jumbotron from './components/jumbotron/jumbotron';
import InfoBoxRegister from './components/infoBoxRegister/infoBoxRegister';
import StartPageFooter from './components/startPageFooter/startPageFooter';

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

const faq_questions = [ 
  {
    id: 0,
    text: 'Welche Inhalte kann ich auf Netflix sehen?',
  },
  {
    id: 1,
    text: 'Was ist Netflix?',
  },
  {
    id: 2,
    text: 'Wie viel kostet Netflix?',
  },
  { 
    id: 3,
    text: 'Was ist anders beim Basis-Abo mit Werbung?',
  },
  {
    id: 4,
    text: 'Wo kann ich Inhalte ansehen?',
  },
  {
    id: 5,
    text: 'Wie kann ich kündigen?',
  },
  {
    id: 6,
    text: 'Ist Netflix gut für Kinder?',
  }
]

function App() {
  let i = 0;
  const jumbotrons = jumbos.map(jumbo => {
      let left = true;
      i += 1;
      if(i % 2)
      left = false;
      return <Jumbotron key={jumbo.id} imgsrc={jumbo.imgsrc} textleft={left} header={jumbo.header} text={jumbo.text} />   
  })

  return (
    <div className="App">
      <DividedLayout>
        <StartPageHeader/>
        {jumbotrons}
        <InfoBoxRegister questions={faq_questions}/>
        <StartPageFooter/>
      </DividedLayout>
    </div>
  );
}

export default App;
