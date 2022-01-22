import React, { useState } from 'react';
import { Link } from "react-router-dom";

import HouseTwo from '../../assets/img/apartamento-1.jpg'
import '../OwlDemo.scss';
import './SingleSlide.scss';


const SingleSlideTwo = () => {
    const [isActive, setActive] = useState("false");

    const viewFullImage = () => {
        setActive(!isActive);
    };

    const currentUrl = window.location.href;
    const match = 'http://localhost:3000/houses/single-house-two'
    const deployedMatch = 'https://carousel-owl-react.herokuapp.com/houses/single-house-two'

    if (match === currentUrl || match === deployedMatch) {
        console.log('hay coincidencia', match)
    }

    return (
        <section className='carousel-item-container'>
            <div className={isActive ? 'carousel-item-left' : "image-modal"} onClick={viewFullImage}>
                <img className="img animate__fadeInRight" src={HouseTwo} alt="apartamento 2" />
            </div>
            <div className='carousel-item-right'>
                <h2>Apartamentos</h2>
                <h3>Duplex<span> reformado</span></h3>
                <p><span className="mobile-description">Apartamento de aproximadamente 120m² divididos en dos plantas. En la primera se encuentran
                    2 o 3 dormitorios independientes con dos camas individuales cada uno, 2 baños completos, salón comedor y cocina independiente.
                    La planta superior es una buhardilla con 2 camas individuales con suficiente espacio para añadir más camas y terraza privada
                    </span></p>
                <div className='button-container'>
                {match !== currentUrl &&
                        <Link to='/houses/single-house-two'>
                            <button>
                                <div>
                                    <span>
                                        <p>Leer más</p><i className="pi pi-arrow-right" style={{ 'fontSize': '2rem' }}></i>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <p>Me interesa</p><i className="pi pi-arrow-right" style={{ 'fontSize': '2rem' }}></i>
                                    </span>
                                </div>
                            </button>
                        </Link>
                    }
                    <Link to='/houses/book'>
                        <button className='button-promotion'>
                            <div>
                                <span>
                                    <p>Reservar</p><i className="pi pi-arrow-right" style={{ 'fontSize': '2rem' }}></i>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <p>Reserva Ahora</p><i className="pi pi-arrow-right" style={{ 'fontSize': '2rem' }}></i>
                                </span>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SingleSlideTwo;