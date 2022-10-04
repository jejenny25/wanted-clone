import React from "react"

import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as IcoArr3 } from "../../assets/svg/ico-arr3.svg";


const TagSlide = () => {
    Swipercore.use([Navigation, Pagination]);

    const tags_settings = {
        slidesPerView: "auto",
        spaceBetween:10, 
        allowTouchMove: true,
        slidesPerGroup:5,        
        speed : 500,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 

        breakpoints: {
            1200: {
                slidesPerGroup :8,
                allowTouchMove: false,
            },
            768: {
                slidesPerGroup :8,
                allowTouchMove: false,
                navigation:false,
            },            
        },
    };
    
    return (
        <TagSlideStyled>
            <Swiper {...tags_settings}>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-green">
                        <span>연봉이 최고의 복지</span>
                        <span className="img"><img src="images/ico-tag01.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-blue">
                        <span>재택근무</span>
                        <span className="img"><img src="images/ico-tag02.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-purple">
                        <span>퇴사율 10% 이하</span>
                        <span className="img"><img src="images/ico-tag03.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-light-green">
                        <span>급성장 중</span>
                        <span className="img"><img src="images/ico-tag04.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-green">
                        <span>병역특례</span>
                        <span className="img"><img src="images/ico-tag05.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-blue">
                        <span>50인 이하</span>
                        <span className="img"><img src="images/ico-tag06.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-purple">
                        <span>50인 이상</span>
                        <span className="img"><img src="images/ico-tag07.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-light-green">
                        <span>업력 5년 이상</span>
                        <span className="img"><img src="images/ico-tag08.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-green">
                        <span>유연근무</span>
                        <span className="img"><img src="images/ico-tag09.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-blue">
                        <span>자유로운 휴가</span>
                        <span className="img"><img src="images/ico-tag10.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-purple">
                        <span>일한만큼 받는 보상</span>
                        <span className="img"><img src="images/ico-tag11.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-lihgt-green">
                        <span>수평적 문화</span>
                        <span className="img"><img src="images/ico-tag12.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-green">
                        <span>요즘 뜨는 산업</span>
                        <span className="img"><img src="images/ico-tag11.png" alt="" /></span>
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button type="button" className="btn btn-tag bg-blue">
                        <span>식사&middot;간식 제공</span>
                        <span className="img"><img src="images/ico-tag12.png" alt="" /></span>
                    </button>
                </SwiperSlide>
                
                <button type="button" className="swiper-button-prev"><span><IcoArr3 /></span></button>
                <button type="button" className="swiper-button-next"><span><IcoArr3 /></span></button>
            </Swiper>
        </TagSlideStyled>
    )
}

const TagSlideStyled = styled.div`
    padding-top:25px;
    margin-top:25px;
    border-top:1px solid rgba(236,236,236,.7);
    .swiper-slide {width:auto;}
    .swiper-slide .btn-tag {display:flex; height: 32px; padding: 8px 14px; border-radius: 20px; align-items:center; font-size: 13px; line-height: 16px; font-weight: 400; color: #333; border: 1px solid transparent;}
    .swiper-slide .btn-tag:hover {border:1px solid rgba(51,102,255,.3)}
    .swiper-slide .btn-tag.bg-green {background:rgb(242, 251, 245);}
    .swiper-slide .btn-tag.bg-blue {background: rgb(243, 249, 254);}
    .swiper-slide .btn-tag.bg-purple {background: rgb(243, 242, 251);}
    .swiper-slide .btn-tag.bg-light-green {background: rgb(246, 248, 238);}
    .swiper-slide .btn-tag .img {width:16px; height:16px; margin-left:5px;}
    .swiper-slide .btn-tag .img img {width:100%;}

    .swiper-button-next, 
    .swiper-button-prev {width:30px; height:30px;  margin-top:-15px; right:0;}
    .swiper-button-prev {left:0; right:inherit;}
    .swiper-button-prev {left:0; right:inherit;}
    .swiper-button-next:after, 
    .swiper-button-prev:after {position:absolute; font-size:0; } 
    .swiper-button-next::before, 
    .swiper-button-prev:before {display:block; position:absolute; font-size:0; width:80px; height:32px; top:50%; right:-50px; margin-top:-16px; background:linear-gradient(270deg,hsla(0,0%,100%,0),#fff 50%); z-index:10; content: '';}
    .swiper-button-next::before {left: -46px; right: inherit; background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%);}
    .swiper-button-next span, 
    .swiper-button-prev span {display:flex; align-items:center; justify-content:center; position:relative; width:28px; height:28px; border-radius:50%; right:0; border:1px solid #c9c9c9; background:#fff; z-index:11;}
    .swiper-button-prev span{transform:rotate(180deg)}
    .swiper-button-next span svg, 
    .swiper-button-prev span svg {width:14px; height:14px}
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {display:none;}
    
`;

export default TagSlide