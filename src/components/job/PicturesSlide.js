import React from "react"

import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Scrollbar } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/scrollbar";


const PicturesSlide = () => {
    Swipercore.use([Navigation, Scrollbar]);

    const pictures_settings = {
        slidesPerView: 1,
        allowTouchMove: true,
        slidesPerGroup:1,        
        speed : 500,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 스크롤바 설정하기
        scrollbar : {
            el : '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            1200: {
                slidesPerGroup :1,
                allowTouchMove: false,
            },
            768: {
                slidesPerGroup :1,
                allowTouchMove: false,
                navigation:false,
            },            
        },
    };

    return (
        <PicturesSlideStyled>
            <Swiper {...pictures_settings}>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail01.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail02.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail03.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail04.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail05.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail06.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail07.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail08.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="images/dummy/company_detail09.jpg" alt="" />
                    </div>
                </SwiperSlide>
                
                <button type="button" className="swiper-button-prev"><span className="icon-arrow_down"></span></button>
                <button type="button" className="swiper-button-next"><span className="icon-arrow_down"></span></button>

                <div className="swiper-scrollbar"></div>
            </Swiper>
        </PicturesSlideStyled>
    )
}

const PicturesSlideStyled = styled.div`
    width:100%;
    .swiper-slide {padding-bottom: 70%;}
    .swiper .img {position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 4px; outline: 1px solid rgba(0,0,0,.05); outline-offset: -1px;}
    .swiper .img img {width: 100%; height: 100%; object-fit: cover;}
    .icon-arrow_down {font-size:26px; color:#b5b5b5;opacity: .7;}
    .swiper-button-next,
    .swiper-button-prev {width:9%; height:100%; top:0; right:0; margin-top:0;}
    .swiper-button-prev {left:0; right:inherit}
    .swiper-button-next:after,
    .swiper-button-prev:after {content:'';}
    .swiper-button-next .icon-arrow_down {transform:rotate(270deg);}
    .swiper-button-prev .icon-arrow_down {transform:rotate(90deg);}
    .swiper {padding-bottom:14px; border-radius:4px;}
    .swiper-horizontal>.swiper-scrollbar {width:100%; height:10px; left:0; bottom:0; background:#fff;}
    .swiper-scrollbar-drag {background-color:#b5b5b5}
`;

export default PicturesSlide