import React from 'react';

//========CSS========//
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//========IMPORT DE COMPONENTS========//
import HeaderCV from './components/header';
import AboutCV from './components/about/index';
import EducationCV from './components/education/index';
import InteresesCV from './components/intereses/index';
import ContactCV from './components/contacts/index';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <BrowserRouter>

          <HeaderCV/>

            <Routes>
              <Route path="/" element={<AboutCV />}/>
              <Route path="/about" element={<AboutCV />}/>
              <Route path="/education" element={<EducationCV />}/>
              <Route path="/interests" element={<InteresesCV/>}/>
              <Route path="/contact" element={<ContactCV 
                nameOne="Brayan Moncada"
                nameTwo="Bmoncada@mail.com"
                nameThree="Quiero trabajar en su compañia"
              />}/>
            </Routes>
        </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;

