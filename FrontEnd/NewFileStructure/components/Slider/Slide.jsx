

import Slider from 'react-slick';
import './slide.css';

const Slide = () => {
    const slides = [
        {
            imgSrc: "/assets/download (1).jpg",
            title: "Jenny Doe",
        },
        {
            imgSrc: "/assets/download (2).jpg",
            title: "Olivia Davis",
        },
        {
            imgSrc: "/assets/download (3).jpg",
            title: "Michael Brown",
        },
        {
            imgSrc: "/assets/download.jpg",
            title: "Emily Johnson",
        },
        {
            imgSrc: "/assets/images.jpg",
            title: "Jane Smith",
        },
    ];

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 1,
    };

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="relative overflow-hidden w-full">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="p-0">
                            <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                                <img src={slide.imgSrc} className="w-full" alt={slide.title} />
                                <div className="p-4 pt-2">
                                    <div className="mb-8">
                                        <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 ">{slide.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;
