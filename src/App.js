import './App.css';
import Topnav from './Topnav';
import Downnav from './Downnav.js';
import Footer from './Footer.js';
import Home from './Home.js';
function App() {
  return (
   <div className='bg-white'>
    <Topnav/>
    <Downnav/>
    <Home/>
    <Footer/>
   </div>
  );
}

export default App;
