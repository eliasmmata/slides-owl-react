import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './OwlDemo.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleSlide from './SingleSlide';

const OwlDemo = () => {

    const [isActive, setActive] = useState("false");

    const viewFullImage = () => {
        setActive(!isActive);
    };

    return (
        <div onClick={viewFullImage} className={isActive ? null : 'hide-for-imageFull'} style={{ padding: `10vh 5vh` }}>
            <OwlCarousel className="owl-theme"
                items={1}
                loop
                nav
                navText={['<i class="pi pi-arrow-left"></i>', '<i class="pi pi-arrow-right"></i>']}
                // EN CASO DE QUE QUERAMOS FADE IN OUT EN VEZ DE DESPLAZAMIENTO LATERAL
                /* animateIn={'animate__fadeIn'}
                animateOut={'animate__fadeOut'} */
                /* animateOut={'animate__fadeOut'} */
                /* autoplay={5000} */
                smartSpeed={1500}
                autoplayHoverPause={true}
            >
                {/* Podría trabajarse también de manera dinámica con componentes y props si hubiera una base de datos de las propiedades */}
                {/* Ejemplo de componente hijo en padre */}
                <SingleSlide animateIn={'animate__fadeInRight'} />
                <div className='carousel-item-container'>
                    <div className='carousel-item-left'>
                        <img className="img" src={'assets/img/casa-playa-1.jpg'} alt="casa playa 2" />
                    </div>
                    <div className='carousel-item-right'>
                        <div>
                            <h2>Casas</h2>
                        </div>
                        <div>
                            <h3>Primera línea<span style={{ display: `block` }}>de playa</span></h3>
                        </div>
                        <div>
                            <p>Casa de aproximadamente 120m² divididos en dos plantas. En la primera se encuentran
                                2 o 3 dormitorios independientes con dos camas individuales cada uno, 2 baños completos, salón comedor y cocina independiente.
                                La planta superior es una buhardilla con 2 camas individuales con suficiente espacio para añadir más camas y terraza privada
                            </p>
                        </div>
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
                <div className='carousel-item-container' >
                    <div className='carousel-item-left'>
                        <img className="img" src={'assets/img/apartamento-2.jpg'} alt="casa playa 2" />
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
                <div className='carousel-item-container' >
                    <div className='carousel-item-left'>
                        <img className="img" src={'assets/img/casa-playa-2.jpg'} alt="casa playa 2" />
                    </div>
                    <div className='carousel-item-right'>
                        <h2>Casa</h2>
                        <h3>Primera línea<span style={{ display: `block` }}>de playa</span></h3>
                        <p>Casa de aproximadamente 120m² divididos en dos plantas. En la primera se encuentran
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
                <div className='carousel-item-container' >
                    <div className='carousel-item-left'>
                        <img className="img" src={'assets/img/img1.png'} alt="apartamento duplex" />
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
            </OwlCarousel>
        </div>
    )
}

export default OwlDemo;