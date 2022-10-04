import styled from "styled-components"

import { Link } from "react-router-dom"

import {InnerStyled, ThumbnailListStyled } from "../../components/common/styled"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";
import { ReactComponent as IcoOnline } from "../../assets/svg/ico-online.svg";

const SectionEvent = () => {
    Swipercore.use([Navigation]);

    const evt_settings = {
        slidesPerView: 2,
        spaceBetween:20,
        slidesPerGroup:2,        
        speed : 500,

        // Navigation arrows
        navigation: {
            nextEl: '.evt-button-next',
            prevEl: '.evt-button-prev',
        },
    };
    
  return (
    <SectionEventStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <p className="tit">커리어 성장을 위한 맞춤 이벤트</p>
                <Link to="#" className="tit-link">이벤트 전체보기<IcoArr5 /></Link>
                <button type="button" className="evt-button-prev"><span className="ico"><IcoArr5 /></span></button>
                <button type="button" className="evt-button-next"><span className="ico"><IcoArr5 /></span></button>
            </div>
            <ThumbnailListStyled>
                <Swiper {...evt_settings}>
                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_evt01.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="category">
                                    <span className="cat type-article">아티클</span>
                                    <span className="cat type-online"><IcoOnline/>Online</span>
                                </div>
                                <p className="tit">Cloud Support Engineer로 성장하는 방법</p>
                                <p className="date">2022.09.30 (금)</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_evt02.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="category">
                                    <span className="cat type-article">아티클</span>
                                </div>
                                <p className="tit">‘에이블리’의 초고속 성장을 가이드하는 데이터란</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_evt03.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="category">
                                    <span className="cat type-online"><IcoOnline/>Online</span>
                                </div>
                                <p className="tit">Cloud Support Engineer로 성장하는 방법</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_evt04.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <div className="category">
                                    <span className="cat type-vod">VOD</span>
                                    <span className="cat type-online"><IcoOnline/>Online</span>
                                </div>
                                <p className="tag">#개발 #IT/기술 #커리어고민 </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                </Swiper>
                
                
            </ThumbnailListStyled>
        </InnerStyled>
    </SectionEventStyled>
  )
}

const SectionEventStyled = styled.div`
    position:relative;
    padding:64px 0;
    .tit-wrap {display:flex; position:relative; justify-content:center; flex-direction:column; align-items: center; margin-bottom:30px;}
    .tit-wrap .tit {display:flex; align-items:center; font-size:22px; line-height: 1.33; font-weight: 700;}
    .tit-wrap .tit-link{display:flex; font-weight: 500; vertical-align: middle; color: #767676; align-items:center;}
    .tit-wrap .tit-link svg {position:relative; top:1px; width:15px; height:15px; fill:#767676;}

    .evt-button-next,
    .evt-button-prev {display:flex; align-items:center; justify-content:center; position: absolute;  z-index:10; top: 50%; margin-top: -18px; width: 36px; height: 36px; left:0; border: 1px solid #e1e2e3; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);} 
    .evt-button-next {left:inherit; right:0;}
    .evt-button-prev.swiper-button-disabled,
    .evt-button-next.swiper-button-disabled {opacity:0.35}
    .evt-button-next .ico,
    .evt-button-prev .ico {display:inline-block; width:16px; height:16px; color: #767676; fill:#767676;} 
    .evt-button-prev .ico {transform:rotate(180deg);}
    .evt-button-next:after,
    .evt-button-prev:after {content:'';}

    .swiper .swiper-slide .thumbnail {padding-bottom: 52.3% !important;}
    
`;

export default SectionEvent