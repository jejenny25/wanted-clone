
import styled from "styled-components";

import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SchCompany = () => {
    Swipercore.use([Navigation]);

    const company_settings = {
        slidesPerView: "auto",
        spaceBetween:10, 
        allowTouchMove: true,
        slidesPerGroup:5,        
        speed : 500,
        // Navigation arrows
        navigation: {
            nextEl: '.coms-button-next',
            prevEl: '.coms-button-prev',
        }, 
    };
  return (
    <SchCompanyStyled>

        <button type="button" className="coms-button-prev"><span className="ico"><IcoArr5 /></span></button>
        <button type="button" className="coms-button-next"><span className="ico"><IcoArr5 /></span></button>
        <Swiper {...company_settings}>

            <SwiperSlide>
                <div className="item">
                    <Link to="#">
                        <div className="info-txt">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt">
                                <p className="tit">누비랩</p>
                                <p className="sub-txt">IT, 컨텐츠</p>
                            </div>
                        </div>
                        <button type="button" className="btn-follow">팔로우</button>
                    </Link>
                    <Link to="#">
                        <div className="info-txt">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt">
                                <p className="tit">누비랩</p>
                                <p className="sub-txt">IT, 컨텐츠</p>
                            </div>
                        </div>
                        <button type="button" className="btn-follow">팔로우</button>
                    </Link>
                    <Link to="#">
                        <div className="info-txt">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt">
                                <p className="tit">누비랩</p>
                                <p className="sub-txt">IT, 컨텐츠</p>
                            </div>
                        </div>
                        <button type="button" className="btn-follow">팔로우</button>
                    </Link>
                </div>
                    
            </SwiperSlide>
        </Swiper>
    </SchCompanyStyled>
  )
}

const SchCompanyStyled = styled.div`
    .swiper .swiper-slide .item {display:grid; grid-template-columns: repeat(2, 1fr); grid-gap:20px;}
    .swiper .swiper-slide .item a {width:100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 21px 20px; background: #fff; border-radius: 2px;}
    .swiper .swiper-slide .item a .info-txt {display: flex; align-items: center;}
    .swiper .swiper-slide .item a .info-txt .logo {width: 58px; height: 58px; margin-right: 20px;}
    .swiper .swiper-slide .item a .info-txt .logo img {width:100%;}
    .swiper .swiper-slide .item a .info-txt .tit {color: #333; font-size: 18px; font-weight: 400; line-height: 27px;}
    .swiper .swiper-slide .item a .info-txt .sub-txt {color: #999; font-size: 14px; font-weight: 400; line-height: 20px;}
    .swiper .swiper-slide .item a .btn-follow{display:flex; justify-content:center; align-items:center; height: 40px; color: #36f; font-weight: 700; font-size: 15px; border: 1px solid #e1e2e3; padding: 12px 25.5px 11px; line-height: 1;border-radius: 25px; }
`;

export default SchCompany