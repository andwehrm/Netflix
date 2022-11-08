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
    question: 'Welche Inhalte kann ich auf Netflix sehen?',
    awnser: 'Netflix hat eine unglaubliche Vielfalt an Filmen, Serien, Dokumentationen und Anime, die ständig aktualisiert wird. Schauen Sie sich heute noch an, was Netflix alles zu bieten hat.'
  },
  {
    id: 1,
    question: 'Was ist Netflix?',
    awnser: 'Netflix ist ein Streaming-Dienst, dessen Mitglieder ein vielseitiges Angebot von preisgekrönten Serien, Filmen, Dokumentationen und mehr auf Tausenden mit dem Internet verbundenen Geräten nutzen können. Sie können jederzeit und überall so viele Inhalte ansehen wie Sie möchten – für einen geringen monatlichen Pauschalbetrag. Es gibt immer etwas Neues zu entdecken und jede Woche kommen weitere Serien und Filme dazu.'
  },
  {
    id: 2,
    question: 'Wie viel kostet Netflix?',
    awnser: 'Für einen monatlichen Pauschalbetrag können Sie Netflix auf Ihrem Smartphone, Tablet, Smart-TV, Laptop oder Streaming-Gerät genießen. Die Abos kosten 4,99 € bis 17,99 € pro Monat. Keine Extrakosten, keine Verträge.'
  },
  { 
    id: 3,
    question: 'Was ist anders beim Basis-Abo mit Werbung?',
    awnser:'Das Basis-Abo mit Werbung ist eine tolle Möglichkeit, Filme und Serien zu einem günstigeren Preis zu genießen. Sie können Ihre Lieblingstitel auf jedem beliebigen Endgerät mit begrenzten Werbeunterbrechungen streamen. Mit diesem Abo sind keine Downloads möglich und eine begrenzte Anzahl von Filmen und Serien ist aus Lizenzgründen nicht verfügbar. Es gelten auch einige Einschränkungen in Bezug auf Standort und Endgerät.'
  },
  {
    id: 4,
    question: 'Wo kann ich Inhalte ansehen?',
    awnser: 'Sie können unsere Inhalte überall und jederzeit ansehen. Loggen Sie sich mit Ihrem Netflix-Konto auf der Website unter netflix.com ein, um direkt auf Ihrem Computer Inhalte anzusehen. Sie können sich auch auf einem Gerät mit Internetverbindung einloggen, auf dem die Netflix-App installiert ist, zum Beispiel auf Smart-TVs, Smartphones, Tablets, Streaming-Playern und Spielkonsolen. Darüber hinaus können Sie Ihre Lieblingsserien auch auf Ihr iOS- oder Android-Mobilgerät oder über Ihre Windows-10-App herunterladen. Mit Downloads können Sie Netflix auch ohne Internetverbindung überall genießen. Nehmen Sie Netflix einfach überall hin mit.'
  },
  {
    id: 5,
    question: 'Wie kann ich kündigen?',
    awnser: 'Mit Netflix sind Sie flexibel. Bei uns gibt es keine lästige Vertragsbindung oder Verpflichtung. Sie können Ihr Konto ganz leicht mit nur zwei Klicks online kündigen. Es gibt keine Kündigungsgebühren, die Mitgliedschaft kann jederzeit begonnen oder angehalten werden.'
  },
  {
    id: 6,
    question: 'Ist Netflix gut für Kinder?',
    awnser: 'Der Kids-Bereich von Netflix ist bereits in Ihrer Mitgliedschaft inbegriffen und gibt Eltern die Kontrolle über das Unterhaltungserlebnis ihrer Kinder, damit diese familienfreundliche Serien und Filme in einem eigens auf ihre Bedürfnisse abgestimmten Bereich genießen können. Kinderprofile sind mit einer PIN-geschützten Kindersicherung versehen, mit der Sie die Altersfreigabe von Titeln einschränken können, die angezeigt werden, und bestimmte Titel für Kinder sperren können.'
  }
]

const footer_links = [
  {
    id: 1,
    text: 'Häufig gestellte Fragen (FAQ)',
  },
  {
    id: 2,
    text: 'Mitgliedschaft kündigen', 
  },
  {
    id: 3,
    text: 'Hilfe-Center', 
  },
  {
    id: 4,
    text: 'Konto', 
  },
  {
    id: 5,
    text: 'Medien-Center', 
  },
  {
    id: 6,
    text: 'Anlegerbeziehungen',
  },
  {
    id: 7,
    text: 'Karriere',
  },
  {
    id: 8,
    text: 'Geschenkkarten einlösen',
  },
  {
    id: 9,
    text: 'Geschenkkarten kaufen',
  },
  {
    id: 10,
    text: 'So können Sie Netflix ansehen',
  },
  {
    id: 11,
    text: 'Nutzungsbedingungen', 
  },
  {
    id: 12,
    text: 'Datenschutz', 
  },
  {
    id: 13,
    text: 'Cookie-Einstellungen', 
  },
  {
    id: 14,
    text: 'Impressum', 
  },
  {
    id: 15,
    text: 'Kontakt', 
  },
  {
    id: 16,
    text: 'Geschwindigkeitstest',
  },
  {
    id: 17,
    text: 'Gesetzliche Garantie', 
  },
  {
    id: 18,
    text: 'Rechtliche Hinweise', 
  },
  {
    id: 19,
    text: 'Nur auf Netflix', 
  },
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
      <StartPageHeader/>
      <DividedLayout dividerHeight='8px' dividerColor='#1f1f1f'>
        {jumbotrons}
        <InfoBoxRegister questions={faq_questions}/>
        <StartPageFooter links={footer_links}/>
      </DividedLayout>
    </div>
  );
}

export default App;
