import styled from "styled-components"

import { Link } from "react-router-dom"

import {InnerStyled, ComsListStyled } from "../../components/common/styled"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SectionSmall = () => {
    Swipercore.use([Navigation]);

    const article_settings = {
        slidesPerView: 2,
        spaceBetween:20,
        slidesPerGroup:2,        
        speed : 500,

        // Navigation arrows
        navigation: {
            nextEl: '.small-button-next',
            prevEl: '.small-button-prev',
        },
    };

  return (
    <SectionSmallStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <p className="tit">
                    <Link to="#" className="tit-tag-link">#50인 이하 <span className="img"><img src="images/ico-small.png" alt="" /></span></Link>
                    회사들을 모아봤어요
                </p>
                <Link to="#" className="tit-link">포지션으로 더 보기<IcoArr5 /></Link>
                <button type="button" className="small-button-prev"><span className="ico"><IcoArr5 /></span></button>
                <button type="button" className="small-button-next"><span className="ico"><IcoArr5 /></span></button>
            </div>
            <ComsListStyled>
                <Swiper {...article_settings}>
                <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/jobmain_thumb03.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="info-txt">
                                    <div className="logo"><img src="images/dummy/jobmain_logo03.jpg" alt="" /></div>
                                    <div className="txt">
                                        <p className="tit">투비콘</p>
                                        <p className="sub-txt">IT, 컨텐츠</p>
                                    </div>
                                </div>
                                <button type="button" className="btn-follow">팔로우</button>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/jobmain_thumb04.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="info-txt">
                                    <div className="logo"><img src="images/dummy/jobmain_logo04.jpg" alt="" /></div>
                                    <div className="txt">
                                        <p className="tit">에디테크놀로지</p>
                                        <p className="sub-txt">제조</p>
                                    </div>
                                </div>
                                <button type="button" className="btn-follow">팔로우</button>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/jobmain_thumb01.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="info-txt">
                                    <div className="logo"><img src="images/dummy/jobmain_logo01.jpg" alt="" /></div>
                                    <div className="txt">
                                        <p className="tit">로고스바이오일렉트로닉스</p>
                                        <p className="sub-txt">IT, 컨텐츠</p>
                                    </div>
                                </div>
                                <button type="button" className="btn-follow">팔로우</button>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/jobmain_thumb02.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="info-txt">
                                    <div className="logo"><img src="images/dummy/jobmain_logo02.jpg" alt="" /></div>
                                    <div className="txt">
                                        <p className="tit">누비랩</p>
                                        <p className="sub-txt">IT, 컨텐츠</p>
                                    </div>
                                </div>
                                <button type="button" className="btn-follow">팔로우</button>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                </Swiper>
                
            </ComsListStyled>
        </InnerStyled>
    </SectionSmallStyled>
  )
}

const SectionSmallStyled = styled.div`
    position:relative;
    margin-bottom:90px;
    .tit-wrap {display:flex; position:relative; justify-content:center; flex-direction:column; align-items: center; margin-bottom:30px;}
    .tit-wrap .tit {display:flex; align-items:center; font-size:22px; line-height: 1.33;}
    .tit-wrap .tit .tit-tag-link {display:flex; align-items:center;  font-weight: 700;}
    .tit-wrap .tit .tit-tag-link .img {display:flex; width: 24px; height: 24px; margin: 0 8px 0 4px;}
    .tit-wrap .tit .tit-tag-link .img img {width:100%}
    .tit-wrap .tit-link{display:flex; font-weight: 500; vertical-align: middle; color: #767676; align-items:center; margin-top:5px;}
    .tit-wrap .tit-link svg {position:relative; top:1px; width:15px; height:15px; fill:#767676;}

    .small-button-next,
    .small-button-prev {display:flex; align-items:center; justify-content:center; position: absolute; z-index:10; top: 50%; margin-top: -18px; width: 36px; height: 36px; left:0; border: 1px solid #e1e2e3; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);} 
    .small-button-next {left:inherit; right:0;}
    .small-button-prev.swiper-button-disabled,
    .small-button-next.swiper-button-disabled {opacity:.35}
    .small-button-next .ico,
    .small-button-prev .ico {display:inline-block; width:16px; height:16px; color: #767676; fill:#767676;} 
    .small-button-prev .ico {transform:rotate(180deg);}
    .small-button-next:after,
    .small-button-prev:after {content:'';}
`;

export default SectionSmall