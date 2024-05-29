import './App.css';
import Topnav from './Topnav';
import Downnav from './Downnav.js';
import Footer from './Footer.js';
import Hero from './Hero.js';
function App() {
  return (
   <div className='bg-white'>
    <Topnav/>
    <Downnav/>
    <Hero/>
    <Footer/>
   </div>
  );
}

export default App;
