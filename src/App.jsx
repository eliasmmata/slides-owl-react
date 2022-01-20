import OwlDemo from './Components/OwlDemo';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './index.scss';
import './App.scss';
import SingleSlide from './Components/SingleSlide';
import Preloader from './Components/Preloader/Preloader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            {loading ? <Route path="/" element={<Preloader />}></Route>
              : <Route path="/" element={<OwlDemo />}></Route>
            }
            <Route path="/single-component" element={
              <div style={{ padding: `10vh 5vh` }}>
                <SingleSlide />
                <div style={{display:`flex`, justifyContent:`center`, margin:`1rem auto`}}>
                  <Link to="/home">
                    <button id="app-button">Volver</button>
                  </Link>
                </div>
              </div>
            }></Route>
            <Route path="/home" element={<OwlDemo />}></Route>
            <Route path="/single-component-two" element={<SingleSlide />}></Route>
            <Route path="/single-component-three" element={<SingleSlide />}></Route>
            <Route path="/single-component-four" element={<SingleSlide />}></Route>
            <Route path="/single-component-five" element={<SingleSlide />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>




  );
}

export default App;
