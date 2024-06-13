import './App.css';
import Topnav from './Topnav.jsx';
import Downnav from './Downnav.jsx';
import Footer from './Footer.jsx';
import Carinsurance from "./Carinsurance.jsx";
import Vaninsurance from "./Vaninsurance.jsx";
import Motorinsurance from "./Motortrade.jsx";
import Accidentinsurance from "./Accident.jsx";
import Homeinsurance from "./Homeinsurance.jsx";
import Businessinsurance from "./Business.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Homepage.jsx';
import Formpage from "./Form.jsx"
import Contactform from './Contactform.jsx';
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
   <div className='bg-white font-Myroboto'>
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
