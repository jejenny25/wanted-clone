import styled from "styled-components"

import { Link } from "react-router-dom"

import {InnerStyled, ComsListStyled } from "../../components/common/styled"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SectionTheme = () => {
    Swipercore.use([Navigation]);

    const article_settings = {
        slidesPerView: 2,
        spaceBetween:20,
        slidesPerGroup:2,        
        speed : 500,

        // Navigation arrows
        navigation: {
            nextEl: '.theme-button-next',
            prevEl: '.theme-button-prev',
        },
    };

  return (
    <SectionThemeStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <p className="tit">테마로 모아보는 요즘 채용</p>
                <button type="button" className="theme-button-prev"><span className="ico"><IcoArr5 /></span></button>
                <button type="button" className="theme-button-next"><span className="ico"><IcoArr5 /></span></button>
            </div>
            <ComsListStyled>
                <Swiper {...article_settings}>
                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/theme_thumb01.jpg" alt="" /></div>
                            <div className="theme-txt-wrap">
                                <p className="tit">주요 대기업</p>
                                <p className="sub-txt">사업성, 성장성, 인지도까지! 세 가지를 모두 갖춘 대기업을 소개합니다.</p>
                            </div>
                        </Link>
                        <ul className="logo-list">
                            <li><img src="images/dummy/theme_logo01.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo02.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo03.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo04.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo05.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo06.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo07.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo08.png" alt="" /></li>
                            <li><Link to="#">+ 20</Link></li>
                        </ul>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/theme_thumb02.jpg" alt="" /></div>
                            <div className="theme-txt-wrap">
                                <p className="tit">성과는 상여금으로 보답하는 기업</p>
                                <p className="sub-txt">회사가 성장하는 만큼 상여금, 성과급으로 보상하는 기업을 소개합니다.</p>
                            </div>
                        </Link>
                        <ul className="logo-list">
                            <li><img src="images/dummy/theme_logo01.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo02.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo03.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo04.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo05.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo06.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo07.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo08.png" alt="" /></li>
                            <li><Link to="#">+ 20</Link></li>
                        </ul>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/theme_thumb03.jpg" alt="" /></div>
                            <div className="theme-txt-wrap">
                                <p className="tit">신입 적극 채용 기업</p>
                                <p className="sub-txt">신입 Wanted! 현재 신입을 채용 중인 기업을 소개합니다.</p>
                            </div>
                        </Link>
                        <ul className="logo-list">
                            <li><img src="images/dummy/theme_logo01.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo02.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo03.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo04.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo05.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo06.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo07.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo08.png" alt="" /></li>
                            <li><Link to="#">+ 20</Link></li>
                        </ul>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/theme_thumb04.jpg" alt="" /></div>
                            <div className="theme-txt-wrap">
                                <p className="tit">좋은 기업을 Wanted</p>
                                <p className="sub-txt">실제 면접 후기를 바탕으로 좋은 채용 경험을 제공한 기업을 소개합니다.</p>
                            </div>
                        </Link>
                        <ul className="logo-list">
                            <li><img src="images/dummy/theme_logo01.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo02.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo03.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo04.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo05.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo06.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo07.png" alt="" /></li>
                            <li><img src="images/dummy/theme_logo08.png" alt="" /></li>
                            <li><Link to="#">+ 20</Link></li>
                        </ul>
                    </SwiperSlide>

                </Swiper>
                
            </ComsListStyled>
        </InnerStyled>
    </SectionThemeStyled>
  )
}

const SectionThemeStyled = styled.div`
    position:relative;
    padding-bottom: 70px;
    > div {padding-top: 70px; border-top:1px solid #ececec;}
    .tit-wrap {display:flex; position:relative; justify-content:center; flex-direction:column; align-items: center; margin-bottom:30px;}
    .tit-wrap .tit {display:flex; align-items:center; font-size:22px; line-height: 1.33; font-weight:700}

    .theme-button-next,
    .theme-button-prev {display:flex; align-items:center; justify-content:center; position: absolute; z-index:10; top: 50%; margin-top: -18px; width: 36px; height: 36px; left:0; border: 1px solid #e1e2e3; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);} 
    .theme-button-next {left:inherit; right:0;}
    .theme-button-prev.swiper-button-disabled,
    .theme-button-next.swiper-button-disabled {opacity:.35}
    .theme-button-next .ico,
    .theme-button-prev .ico {display:inline-block; width:16px; height:16px; color: #767676; fill:#767676;} 
    .theme-button-prev .ico {transform:rotate(180deg);}
    .theme-button-next:after,
    .theme-button-prev:after {content:'';}
`;

export default SectionTheme