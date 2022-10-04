import styled from "styled-components"

import { Link } from "react-router-dom"

import {InnerStyled, JobAdListStyled } from "../../components/common/styled"
import BtnBookmark from "../../components/common/BtnBookmark"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SectionPopular = () => {
    Swipercore.use([Navigation]);

    const article_settings = {
        slidesPerView: 4,
        spaceBetween:20,
        slidesPerGroup:4,        
        speed : 500,

    };

  return (
    <SectionPopularStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <p className="tit">요즘 뜨는 포지션 </p>
            </div>
            <JobAdListStyled>
                <Swiper {...article_settings}>
                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad05.jpg" alt="" /><BtnBookmark active={true}/></div>
                            <div className="txt-wrap">
                                <p className="tit">시니어 개발자 (Front-end, React)</p>
                                <p className="company-name">해줌</p>
                                <p className="job-location">서울 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad02.jpg" alt="" /><BtnBookmark active={false}/></div>
                            <div className="txt-wrap">
                                <p className="tit">프론트엔드 개발자</p>
                                <p className="company-name">롯데헬스케어</p>
                                <p className="job-location">서울 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad03.jpg" alt="" /><BtnBookmark active={false}/></div>
                            <div className="txt-wrap">
                                <p className="tit">Web frontend 개발</p>
                                <p className="company-name">조아라(웹소설)</p>
                                <p className="job-location">경기 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad04.jpg" alt="" /><BtnBookmark active={false}/></div>
                            <div className="txt-wrap">
                                <p className="tit">웹 퍼블리셔</p>
                                <p className="company-name">어반베이스(Urbanbase)</p>
                                <p className="job-location">서울 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad05.jpg" alt="" /><BtnBookmark active={true}/></div>
                            <div className="txt-wrap">
                                <p className="tit">프론트엔드 개발자 (Front-end, React)</p>
                                <p className="company-name">스펙터</p>
                                <p className="job-location">서울 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad02.jpg" alt="" /><BtnBookmark active={false}/></div>
                            <div className="txt-wrap">
                                <p className="tit">프론트엔드 개발자</p>
                                <p className="company-name">롯데헬스케어</p>
                                <p className="job-location">서울 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad03.jpg" alt="" /><BtnBookmark active={false}/></div>
                            <div className="txt-wrap">
                                <p className="tit">웹 퍼블리셔</p>
                                <p className="company-name">조아라(웹소설)</p>
                                <p className="job-location">서울 &middot; 한국</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_jobad04.jpg" alt="" /><BtnBookmark active={false}/></div>
                            <div className="txt-wrap">
                                <p className="tit">웹 퍼블리셔</p>
                                <p className="company-name">어반베이스(Urbanbase)</p>
                                <p className="job-location">서울 &middot; 한국</p>

                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                
                
            </JobAdListStyled>
        </InnerStyled>
    </SectionPopularStyled>
  )
}

const SectionPopularStyled = styled.div`
    position:relative;
    > div {padding-top: 70px; border-top:1px solid #ececec;}
    .tit-wrap {display:flex; position:relative; justify-content:center; flex-direction:column; align-items: center; margin-bottom:30px;}
    .tit-wrap .tit {display:flex; align-items:center; font-size:22px; line-height: 1.33; font-weight: 700;}
    .tit-wrap .tit .img {display:block; width:114px;}
    .tit-wrap .tit .img img {width:100%; vertical-align: -4px; margin-right: 3px; margin-bottom: 3px;}
    .tit-wrap .tit .btn-q {width:23px; height:23px; margin-left:5px}
    .tit-wrap .tit .btn-q svg {width:23px; height:23px;}
    .tit-wrap .tit-link{display:flex; font-weight: 500; vertical-align: middle; color: #767676; align-items:center;}
    .tit-wrap .tit-link svg {position:relative; top:1px; width:15px; height:15px; fill:#767676;}

    .popular-button-next,
    .popular-button-prev {display:flex; align-items:center; justify-content:center; position: absolute; z-index:10; top: 50%; margin-top: -18px; width: 36px; height: 36px; left:0; border: 1px solid #e1e2e3; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);} 
    .popular-button-next {left:inherit; right:0;}
    .popular-button-prev.swiper-button-disabled,
    .popular-button-next.swiper-button-disabled {opacity:.35}
    .popular-button-next .ico,
    .popular-button-prev .ico {display:inline-block; width:16px; height:16px; color: #767676; fill:#767676;} 
    .popular-button-prev .ico {transform:rotate(180deg);}
    .popular-button-next:after,
    .popular-button-prev:after {content:'';}
`;

export default SectionPopular