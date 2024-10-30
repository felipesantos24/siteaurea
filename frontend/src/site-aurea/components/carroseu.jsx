import React, { useState, useEffect } from 'react';
import './carroseu.scss';

const Carousel = () => {
    const slides = [
        { id: 1, img: 'mulherjoias.jpg', caption: 'Imagem 1' },
        { id: 2, img: 'pescoa.png', caption: 'Imagem 2' },
        { id: 3, img: 'bracossa.png', caption: 'Imagem 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-slide">
                {slides.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.img}
                        alt={slide.caption}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;