import React, { useState } from 'react';
import { Link } from "react-router-dom";

import HouseThree from '../../assets/img/casa-playa-1.jpg'
import '../OwlDemo.scss';
import './SingleSlide.scss';

const SingleSlideThree = () => {
    const [isActive, setActive] = useState("false");

    const viewFullImage = () => {
        setActive(!isActive);
    };

    return (
        <section className='carousel-item-container' onClick={viewFullImage}>
            <div className={isActive ? 'carousel-item-left' : "image-modal"} onClick={viewFullImage}>
                <img className="img animate__fadeInRight" src={HouseThree} alt="apartamento 3" />
            </div>
            <div className='carousel-item-right'>
                <h2>Casas</h2>
                <h3>Casa<span style={{ display: `block` }}> moderna</span></h3>
                <p>Casa de aproximadamente 120m² divididos en dos plantas. En la primera se encuentran
                    2 o 3 dormitorios independientes con dos camas individuales cada uno, 2 baños completos, salón comedor y cocina independiente.
                    La planta superior es una buhardilla con 2 camas individuales con suficiente espacio para añadir más camas y terraza privada
                </p>
                <div className='button-container'>
                    <Link to='/houses/single-house-three'>
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



export default SingleSlideThree;