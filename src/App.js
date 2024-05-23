import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Header from './components/Header';
import Us from './components/Us';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';


function App() {
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480});
  return (
    <div className="app">
      <Header />
      <Banner />
      <main className='main'>
        <Menu />
        <Us />
      </main>
      <Footer />
      {isMobile ? (<button className='btn-order_now_xs'><FontAwesomeIcon icon={faBurger}></FontAwesomeIcon></button>):(
        <button className='btn-order_now'>ORDENAR</button>
      )}
    </div>
  );
}

export default App;
