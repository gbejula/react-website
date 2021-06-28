import CardContainer from '../components/CardContainer';
import CarouselContainer from '../components/CarouselContainer';
import Contact from '../components/Contact';
import Faq from '../components/Faq';
import Features from '../components/Features';

const Home = () => {
  return (
    <>
      <CarouselContainer />
      <CardContainer />
      <Features />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
