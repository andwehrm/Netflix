import './App.css';
import footerData from './data/footerData.json';
import faqData from './data/faqData.json';
import jumboData from './data/jumboData';
import Jumbotron from './components/jumbotron/jumbotron';
import DividedLayout from './components/dividedLayout/dividedLayout';
import StartPageHeader from './components/startPageHeader/startPageHeader';
import InfoBoxRegister from './components/infoBoxRegister/infoBoxRegister';
import StartPageFooter from './components/startPageFooter/startPageFooter';

function App() {
  let i = 0;
  const jumbotrons = jumboData.map(jumbo => {
      let left = true; i++;
      if(i % 2)
        left = false;
      return <Jumbotron key={jumbo.id} imgsrc={jumbo.imgsrc} textleft={left} header={jumbo.header} text={jumbo.text} />   
  })

  return (
    <div className="App">
      <StartPageHeader/>
      <DividedLayout dividerHeight='8px' dividerColor='#1f1f1f'>
        {jumbotrons}
        <InfoBoxRegister title='Häufig gestellte Fragen' questions={faqData}/>
        <StartPageFooter title='Fragen? Einfach anrufen: 0800-000-9677' 
                         country='Netflix Deutschland' links={footerData}/>
      </DividedLayout>
    </div>
  );
}

export default App;
