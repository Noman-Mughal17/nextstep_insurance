import './App.css';
import Topnav from './Topnav';
import Downnav from './Downnav.js';
import Footer from './Footer.js';
import Carinsurance from "./Carinsurance.js";
import Vaninsurance from "./Vaninsurance.js";
import Motorinsurance from "./Motortrade.js";
import Accidentinsurance from "./Accident.js";
import Homeinsurance from "./Homeinsurance.js";
import Businessinsurance from "./Business.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Homepage.js';
import Formpage from "./Form.js"
import Contactform from './Contactform.js';
function App() {
  // const router=createBrowserRouter([
  //   {path:'/',element:<Home/>},
  //   {path:'/Car-insurance',element:<Carinsurance/>},
  //   {path:'/Van-insurance',element:<Vaninsurance/>},
  //   {path:'/Motor-trade',element:<Motorinsurance/>},
  //   {path:'/Accident-managment',element:<Accidentinsurance/>},
  //   {path:'/Home-insurance',element:<Homeinsurance/>},
  //   {path:'/Business-insurance',element:<Businessinsurance/>}
  // ])
  return (
   <div className='bg-white'>
    <Topnav/>
    <Downnav/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/carinsurance" element={<Carinsurance />} />
      <Route path="/vaninsurance" element={<Vaninsurance />} />
      <Route path="/motortrade" element={<Motorinsurance/>} />
      <Route path="/accidentmanagment" element={<Accidentinsurance/>} />
      <Route path="/businessinsurance" element={<Businessinsurance/>} />
      <Route path="/homeinsurance" element={<Homeinsurance/>} />
      <Route path="/form" element={<Formpage/>}/>
      <Route path='/contactform' element={<Contactform/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
  );
}

export default App;
