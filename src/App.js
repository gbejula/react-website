import Header from './components/Header';
import './App.css';
import CarouselContainer from './components/CarouselContainer';
import CardContainer from './components/CardContainer';
import Features from './components/Features';
import Faq from './components/Faq';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <CardContainer />
      <Features />
      <Faq />
      <Contact />
    </>
  );
}

export default App;
