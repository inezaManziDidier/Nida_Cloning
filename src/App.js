import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards'
import News from './Components/News'
import Footer from './Components/Footer';
import CarouselSponsor from './Components/CarouselSponsor';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Carousel/> */}
      <Carousel/>
       <Cards/>
        <News/>
        <CarouselSponsor/>
        <Footer/>
    </div>
  );
}

export default App;
