
import './App.css';
import {useEffect, useState} from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes

} from 'react-router-dom';
import Postsubmission from "./components/postsubmission";
import Form from "./components/form"
import Subfail from "./components/subfail";


function App() {


  return (
      <div className="App">
      <Router>
          <Routes>
          <Route path="/submitted" element={<Postsubmission/>}/>
            <Route path="/failed" element={<Subfail/>}/>

          <Route path="/" element={<Form/>}/>



              </Routes>
      </Router>
      </div>

  );

}

export default App;
