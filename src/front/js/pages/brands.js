import React, { useState } from "react";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Symbol.png",
        "Adidas",
        "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/e5853518-be79-4fcc-afe4-6d2df175de53/el-mejor-calzado-informal-de-nike-para-usar-todos-los-días.jpg",
        "Calzados",
        "https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/4:3/w_712,h_534,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg",
        "Laptops",
        "https://www.apple.com/newsroom/images/product/watch/standard/applewatch_series_3_two_loop_full.jpg.og.jpg?202302031731",
        "Relojes",
    ];

    const previousSlide = () => {
        const lastIndex = images.length - 2;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 2;

        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = images.length - 2;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 2;

        setCurrentIndex(index);
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="container mt-auto">
                <div className="d-flex justify-content-center container mb-4">
                    <button className="border-0 bg-light me-3">
                        <img src={images[currentIndex]} className="brandsimg" alt="ERROR" />
                    </button>
                    <button className="border-0 bg-light">
                        <img src={images[currentIndex + 2]} className="brandsimg" alt="ERROR" />
                    </button>
                    <button className="border-0 bg-light">
                        <img src={images[currentIndex + 3]} className="brandsimg" alt="ERROR" />
                    </button>
                    <button className="border-0 bg-light">
                        <img src={images[currentIndex + 4]} className="brandsimg" alt="ERROR" />
                    </button>
                    <button className="border-0 bg-light">
                        <img src={images[currentIndex + 5]} className="brandsimg" alt="ERROR" />
                    </button>
                    <button className="border-0 bg-light">
                        <img src={images[currentIndex + 6]} className="brandsimg" alt="ERROR" />
                    </button>
                </div>
                <div className="d-flex justify-content-center mb-4 pb-4 ">
                    <button className="carousel-button rounded-circle border-0 me-3" onClick={previousSlide}>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <button className="carousel-button rounded-circle border-0" onClick={nextSlide}>
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Brands = () => {


    return (
        <div className="container" style={{ marginTop: '10%', marginBottom: '10%' }}>
            <Carousel />
        </div>
    );
};
