import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {

    const data = [
        {
            img: "9.jpg",
            avatar: "1.jpg",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "11.jpg",
            avatar: "3.jpg",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "12.jpg",
            avatar: "4.jpg",
            title: "The Sandbox",
            author: "Sound Box"
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".intro_prev",
                    nextEl: ".intro_next",
                }}
                className="custom-class"
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="slider-item">
                            <img
                                src={`/images/items/${item.img}`}
                                alt=""
                                className="img-fluid"
                            />
                            <div className="slider-item-avatar">
                                <img
                                    src={`/images/avatar/${item.avatar}`}
                                    alt=""
                                />
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="arrows">
                    <span className="intro_prev">
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="intro_next">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </div>
            </Swiper>


        </>
    );
};

export default IntroSlider;

