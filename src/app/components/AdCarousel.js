import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const AdCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="relative mb-8">
            <Slider {...settings}>
                <div className="relative bg-gradient-to-r from-red-300 to-orange-300 text-orange p-12 rounded-lg text-center">
                    {/* Eticheta OFERTA */}
                    <div className="absolute top-4 right-4 bg-red-600 text-white py-1 px-3 rounded-full text-sm font-semibold">
                        OFERTA
                    </div>
                    <h2 className="text-2xl font-bold">
                        De pe mobil ai 5% reducere în weekend până în ora 19:00
                    </h2>
                </div>
                <div className="relative bg-gradient-to-r from-red-300 to-orange-300 text-orange p-12 rounded-lg text-center">
                    {/* Eticheta OFERTA */}
                    <div className="absolute top-4 right-4 bg-red-600 text-white py-1 px-3 rounded-full text-sm font-semibold">
                        OFERTA
                    </div>
                    <h2 className="text-2xl font-bold">
                        Când e foarte cald afară, se aplică o reducere de 1%
                        pentru fiecare grad mai mare de 25
                    </h2>
                </div>
            </Slider>
        </div>
    );
};

export default AdCarousel;
