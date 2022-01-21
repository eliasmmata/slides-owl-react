import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import SingleSlide from '../Components/Slides/SingleSlide';
import SingleSlideTwo from '../Components/Slides/SingleSlideTwo';
import SingleSlideThree from '../Components/Slides/SingleSlideThree';
import SingleSlideFour from '../Components/Slides/SingleSlideFour';
import SingleSlideFive from '../Components/Slides/SingleSlideFive';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OwlDemo.scss';

const OwlDemo = () => {

    return (

        <div style={{ padding: `10rem 5rem` }} className='animate__fadeIn'>
            <OwlCarousel className="owl-theme"
                items={1}
                loop
                nav
                navText={['<i class="pi pi-arrow-left"></i>', '<i class="pi pi-arrow-right"></i>']}
                // EN CASO DE QUE QUERAMOS FADE IN OUT EN VEZ DE DESPLAZAMIENTO LATERAL
                animateIn={'animate__fadeIn'}
                animateOut={'animate__fadeOut'}
                autoplay={true}
                autoplayTimeout={7000}
                autoplayHoverPause={true}
                navSpeed={true}
                dragEndSpeed={true}
                dotsSpeed={2000}
            >
                <SingleSlide/>
                <SingleSlideTwo/>
                <SingleSlideThree/>
                <SingleSlideFour />
                <SingleSlideFive />
            </OwlCarousel>
        </div>

    )
}

export default OwlDemo;