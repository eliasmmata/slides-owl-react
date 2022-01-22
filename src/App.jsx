import OwlDemo from './Components/OwlDemo';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Preloader from './Components/Preloader/Preloader';
import SingleSlide from './Components/Slides/SingleSlide';
import SingleSlideTwo from './Components/Slides/SingleSlideTwo';
import SingleSlideThree from './Components/Slides/SingleSlideThree';
import SingleSlideFour from './Components/Slides/SingleSlideFour';
import SingleSlideFive from './Components/Slides/SingleSlideFive';

import './scss/App.scss';
import './index.scss';
import Cart from './Components/Cart/Cart';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          {loading ? <Route path="/" element={<Preloader />}></Route>
            : <Route path="/" element={<OwlDemo />}></Route>
          }
          <Route path="/home" element={<OwlDemo />}></Route>

          <Route path="/houses/single-house-one" element={
            <section className='app-container-slide animate__fadeIn'>
              <h3 className="slide-title">Casa Link Route 1</h3>
              <SingleSlide />
              <div style={{ display: `flex`, justifyContent: `center`, margin: `1rem auto` }}>
                <Link to="/home">
                  <button className="app-button">
                    <i class="pi pi-home" style={{ marginRight: `1rem` }}></i>
                    Volver
                  </button>
                </Link>
              </div>
            </section>
          }></Route>
          <Route path="/houses/single-house-two" element={
            <section className='app-container-slide animate__fadeIn'>
              <h3 className="slide-title">Casa Link Route 2</h3>
              <SingleSlideTwo />
              <div style={{ display: `flex`, justifyContent: `center`, margin: `1rem auto` }}>
                <Link to="/home">
                  <button className="app-button">
                    <i class="pi pi-home" style={{ marginRight: `1rem` }}></i>
                    Volver
                  </button>
                </Link>
              </div>
            </section>
          }></Route>
          <Route path="/houses/single-house-three" element={
            <section className='app-container-slide animate__fadeIn'>
              <h3 className="slide-title">Casa Link Route 3</h3>
              <SingleSlideThree />
              <div style={{ display: `flex`, justifyContent: `center`, margin: `1rem auto` }}>
                <Link to="/home">
                  <button className="app-button">
                    <i class="pi pi-home" style={{ marginRight: `1rem` }}></i>
                    Volver
                  </button>
                </Link>
              </div>
            </section>
          }></Route>
          <Route path="/houses/single-house-four" element={
            <section className='app-container-slide animate__fadeIn'>
              <h3 className="slide-title">Casa Link Route 4</h3>
              <SingleSlideFour />
              <div style={{ display: `flex`, justifyContent: `center`, margin: `1rem auto` }}>
                <Link to="/home">
                  <button className="app-button">
                    <i class="pi pi-home" style={{ marginRight: `1rem` }}></i>
                    Volver
                  </button>
                </Link>
              </div>
            </section>
          }></Route>
          <Route path="/houses/single-house-five" element={
            <section className='app-container-slide animate__fadeIn'>
              <h3 className="slide-title">Casa Link Route 3</h3>
              <SingleSlideFive />
              <div style={{ display: `flex`, justifyContent: `center`, margin: `1rem auto` }}>
                <Link to="/home">
                  <button className="app-button">
                    <i class="pi pi-home" style={{ marginRight: `1rem` }}></i>
                    Volver
                  </button>
                </Link>
              </div>
            </section>
          }></Route>

          <Route path="/houses/book" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
