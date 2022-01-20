import React, { useState } from 'react';
import './OwlDemo.scss';

const SingleSlide = () => {

    const [isActive, setActive] = useState("false");

    const viewFullImage = () => {
        setActive(!isActive);
    };

    return (
        <div className='carousel-item-container' >
            <div className={isActive ? 'carousel-item-left' : "image-modal"} onClick={viewFullImage}>
                <img className="img" src={'assets/img/apartamento-2.jpg'} alt="apartamento duplex" />
            </div>
            <div className='carousel-item-right'>
                <h2>Apartamentos</h2>
                <h3>Ático<span style={{ display: `block` }}>duplex</span></h3>
                <p>Apartamento de aproximadamente 120m² divididos en dos plantas. En la primera se encuentran
                    2 o 3 dormitorios independientes con dos camas individuales cada uno, 2 baños completos, salón comedor y cocina independiente.
                    La planta superior es una buhardilla con 2 camas individuales con suficiente espacio para añadir más camas y terraza privada
                </p>
                <div className='button-container'>
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
                </div>
            </div>
        </div>
    )
}



export default SingleSlide;