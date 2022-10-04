import {Link} from "react-router-dom"

import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Autoplay } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const JopMainSlide = () => {
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
                            <img src="images/dummy/job_slide01.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">카카오헬스케어의 미래를 함께 할</p>
                        <p className="sub-tit">개발자, 기획자, 디자이너를 영입하고 있어요</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/dummy/job_slide02.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">블록체인 웹3.0 시장의 게임체인저</p>
                        <p className="sub-tit">#전세계_160개국 #누적_사용자_130만명</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/dummy/job_slide03.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">K-뷰티 데이터화 'CDRI'</p>
                        <p className="sub-tit">개발자/ AI엔지니어/ 디자이너 외 채용</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/dummy/job_slide04.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">H-온드림 스타트업 그라운드</p>
                        <p className="sub-tit">펠로기업 공동채용 중!</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/dummy/job_slide05.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">트래블월렛 개발자 적극채용</p>
                        <p className="sub-tit">#최고대우 #스톡옵션 #유연근무제 #미친복지</p>
                        <div className="btn-wrap">
                            <Link to="#">바로가기<IcoArr5 /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="#">
                        <div className="img">
                            <img src="images/dummy/job_slide06.jpg" alt="" />
                        </div>
                    </Link>
                    <div className="txt-wrap">
                        <p className="tit">Coupang Rocket Growth</p>
                        <p className="sub-tit">개발자 적극 채용 중</p>
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

export default JopMainSlide