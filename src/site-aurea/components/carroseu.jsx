import React, { useState } from 'react'

import './carroseu.scss'


const Carousel = () => {
    const slides = [
        { id: 1, img: 'fin.jpg', caption: 'Imagem 1' },
        { id: 2, img: 'pescoa.png', caption: 'Imagem 2' },
        { id: 3, img: 'bracossa.png', caption: 'Imagem 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-button" onClick={prevSlide}>❮</div>
            <div className="carousel-slide">
                <img src={slides[currentIndex].img} alt={slides[currentIndex].caption} />
            </div>
            <div className="carousel-button" onClick={nextSlide}>❯</div>
        </div>
    );
};

export default Carousel;