import {Link} from "react-router-dom"

import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Autoplay } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const MainPictureSlide = () => {
    Swipercore.use([Navigation, Autoplay]);

    const pictures_settings = {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        slidesPerGroup:1,        
        speed : 500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.main-button-next',
            prevEl: '.main-button-prev',
        },
    };

    return (
        <PicturesSlideStyled>
            <Swiper {...pictures_settings}>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/main/slide01.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">Seat and Talk 마키나락스</p>
                        <p className="sub-tit">지금 적극 채용 중인 포지션을 확인하세요!</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/main/slide02.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">스타트업에 코칭 리더십이 꼭 필요한 이유</p>
                        <p className="sub-tit">더 나은 조직을 만들고 싶은 당신에게</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/main/slide03.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">직장인이여 움직여라! 이직을 Wanted</p>
                        <p className="sub-tit">딱 맞는 회사로 이직하고 경품 받으세요!</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/main/slide04.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">우리 회사를 소개합니다.</p>
                        <p className="sub-tit">'회사'에 대한 정보, 원티드가 찾아드릴게요!</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/main/slide05.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">스터디살롱: 인담자의 성공과 실패</p>
                        <p className="sub-tit">인사담당자의 성공과 실패, 레슨런</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/main/slide06.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">주니어를 위한 백엔드 시스템 디자인</p>
                        <p className="sub-tit">총상금 300만원 백엔드 챌린지</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                
                <button type="button" className="main-button-prev"><span className="ico"><IcoArr5 /></span></button>
                <button type="button" className="main-button-next"><span className="ico"><IcoArr5 /></span></button>
            </Swiper>
        </PicturesSlideStyled>
    )
}

const PicturesSlideStyled = styled.div`
    width:100%;
    .swiper-slide {width:1060px !important; height:300px; position: relative; border-radius:5px; overflow:hidden; filter:brightness(50%);}
    .swiper-slide.swiper-slide-active {filter:brightness(100%);}
    .main-button-next,
    .main-button-prev {position: absolute; z-index: 10; display: flex; align-items: center; justify-content:center; top: 120px; width: 30px; height: 60px; left:calc((100% - 1210px)/2); opacity: .5; border-radius: 15px; background-color: #fff; font-size: 16px; }
    .main-button-next {left:inherit; right:calc((100% - 1200px)/2)}
    .main-button-next:after,
    .main-button-prev:after {content:'';}
    .main-button-next .ico,
    .main-button-prev .ico {display:block; width:16px; height:16px;}
    .main-button-prev .ico {transform:rotate(180deg);}


    .swiper .swiper-slide .img {}
    .swiper .swiper-slide .img img {width: 100%; height: 100%; object-fit: cover;}
    .swiper .swiper-slide .txt-wrap {position: absolute; bottom: 28px; width: 330px; height: 146px; border-radius: 4px; background-color: #fff; text-align: left; left: 34px;}
    .swiper .swiper-slide .txt-wrap .tit {margin:20px 20px 0 20px;font-size:20px; line-height:1.5; font-weight: 700; color: #333; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
    .swiper .swiper-slide .txt-wrap .sub-tit {margin: 0 20px; height: 44px; font-size: 14px; line-height: 1.64; color: #333;}
    .swiper .swiper-slide .btn-wrap {border-top:1px solid #ececec;}
    .swiper .swiper-slide .btn-wrap a {display:inline-flex; align-items:center; height:40px; margin:6px 0 0 13px; padding:6px 8px; font-size: 14px; font-weight: 700; line-height: 1; color: #36f;}
    .swiper .swiper-slide .btn-wrap a svg {width:14px; fill:#36f !important;}
    
`;

export default MainPictureSlide