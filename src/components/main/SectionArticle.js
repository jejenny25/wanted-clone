import styled from "styled-components"

import { Link } from "react-router-dom"

import {InnerStyled, ThumbnailListStyled } from "../../components/common/styled"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SectionArticle = () => {
    Swipercore.use([Navigation]);

    const article_settings = {
        slidesPerView: 4,
        spaceBetween:20,
        slidesPerGroup:4,        
        speed : 500,

        // Navigation arrows
        navigation: {
            nextEl: '.insight-button-next',
            prevEl: '.insight-button-prev',
        },
    };

  return (
    <SectionArticleStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <p className="tit">3분만에 읽는 Wanted+ 아티클</p>
                <Link to="#" className="tit-link">아티클 전체보기<IcoArr5 /></Link>
                <button type="button" className="insight-button-prev"><span className="ico"><IcoArr5 /></span></button>
                <button type="button" className="insight-button-next"><span className="ico"><IcoArr5 /></span></button>
            </div>
            <ThumbnailListStyled>
                <Swiper {...article_settings}>
                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article01.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">Cloud Support Engineer로 성장하는 방법</p>
                                <p className="tag">#개발 #IT/기술 #취업/이직 </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article02.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">네이버랩스에서 그려 갈 자율주행 미래</p>
                                <p className="tag">#개발 #IT/기술 #데이터</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article03.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">NSHCㅣ3~5년 개발자들의 블루오션, 사이버 보안에 도전하세요</p>
                                <p className="tag">#개발 #IT/기술 #리더십 </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article04.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">12년 차 개발자에서 ‘MS’ 클라우드 엔지니어로</p>
                                <p className="tag">#개발 #IT/기술 #커리어고민 </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article01.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">Cloud Support Engineer로 성장하는 방법</p>
                                <p className="tag">#개발 #IT/기술 #취업/이직 </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article02.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">네이버랩스에서 그려 갈 자율주행 미래</p>
                                <p className="tag">#개발 #IT/기술 #데이터</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article03.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">NSHCㅣ3~5년 개발자들의 블루오션, 사이버 보안에 도전하세요</p>
                                <p className="tag">#개발 #IT/기술 #리더십 </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="#">
                            <div className="thumbnail"><img src="images/dummy/thumb_article04.jpg" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="tit">12년 차 개발자에서 ‘MS’ 클라우드 엔지니어로</p>
                                <p className="tag">#개발 #IT/기술 #커리어고민 </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                
                
            </ThumbnailListStyled>
        </InnerStyled>
    </SectionArticleStyled>
  )
}

const SectionArticleStyled = styled.div`
    position:relative;
    padding:64px 0;
    .tit-wrap {display:flex; position:relative; justify-content:center; flex-direction:column; align-items: center; margin-bottom:30px;}
    .tit-wrap .tit {display:flex; align-items:center; font-size:22px; line-height: 1.33; font-weight: 700;}
    .tit-wrap .tit-link{display:flex; font-weight: 500; vertical-align: middle; color: #767676; align-items:center;}
    .tit-wrap .tit-link svg {position:relative; top:1px; width:15px; height:15px; fill:#767676;}

    .insight-button-next,
    .insight-button-prev {display:flex; align-items:center; justify-content:center; position: absolute; z-index:10; top: 50%; margin-top: -18px; width: 36px; height: 36px; left:0; border: 1px solid #e1e2e3; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);} 
    .insight-button-next {left:inherit; right:0;}
    .insight-button-prev.swiper-button-disabled,
    .insight-button-next.swiper-button-disabled {opacity:.35}
    .insight-button-next .ico,
    .insight-button-prev .ico {display:inline-block; width:16px; height:16px; color: #767676; fill:#767676;} 
    .insight-button-prev .ico {transform:rotate(180deg);}
    .insight-button-next:after,
    .insight-button-prev:after {content:'';}
`;

export default SectionArticle