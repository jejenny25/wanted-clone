import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation } from 'swiper';
import "swiper/css"; //basic
import "swiper/css/navigation";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";
import { ReactComponent as IcoEllipsis } from "../../assets/svg/ico-ellipsis.svg";

const InsightFilter = () => {
    Swipercore.use([Navigation]);

    const insight_settings = {
        slidesPerView: "auto",
        spaceBetween:10,
        slidesPerGroup:5,        
        speed : 500,

        // Navigation arrows
        navigation: {
            nextEl: '.filter-button-next',
            prevEl: '.filter-button-prev',
        },
    };
    return (
        <InsightSlideStyled>
            <Swiper {...insight_settings}>

                <SwiperSlide>
                
                    <button type="button" className="btn-tag">라이프스타일</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag is-active">리더십</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">커리어고민</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">조직문화</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">취업/이직</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">IT/기술</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">회사생활</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">인간관계</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">디자인</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">마케팅</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">콘텐츠 제작</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">노무</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">MD</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">브랜딩</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">경영/전략</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">HR</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">서비스기획</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">개발</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">UX/UI</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button type="button" className="btn-tag">데이터</button>
                </SwiperSlide>
                
                
                <button type="button" className="filter-button-prev"><span className="ico"><IcoArr5 /></span></button>
                <button type="button" className="filter-button-next"><span className="ico"><IcoArr5 /></span></button>
            </Swiper>
            <button type="button" className="btn btn-eliipsis"><IcoEllipsis/></button>
        </InsightSlideStyled>
    )
}

const InsightSlideStyled = styled.div`
    margin:30px 0;
    display:flex;
    justify-content: space-between;
    .swiper {width:calc(100% - 70px); margin:0}
    .swiper .swiper-slide {width:auto;}
    .swiper .swiper-slide .btn-tag {padding: 0 29px; height: 50px; font-size: 15px; border: 1px solid #f2f4f7; background-color: #f2f4f7; border-radius: 5px;}
    .swiper .swiper-slide .btn-tag.is-active,
    .swiper .swiper-slide .btn-tag:hover {font-weight: 700; background-color: #fff; border: 1px solid #36f; color: #36f;}
    .filter-button-next,
    .filter-button-prev {position: absolute; z-index: 10; display: flex; align-items: center; top:0; width:80px; height: 100%; left:0; justify-content:flex-start; background:linear-gradient(90deg,#fff 21.82%,hsla(0,0%,100%,0))}
    .filter-button-next {left:inherit; right:0; justify-content: flex-end;background: linear-gradient(270deg,#fff 21.82%,hsla(0,0%,100%,0));}
    .filter-button-prev.swiper-button-disabled,
    .filter-button-next.swiper-button-disabled {display:none}
    .filter-button-next .ico,
    .filter-button-prev .ico {display:flex; align-items:center; justify-content:center; width: 44px; height: 44px; border: 1px solid #e1e2e3; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%); color: #767676; fill:#767676;} 
    .filter-button-prev .ico {transform:rotate(180deg);}
    .filter-button-next .ico svg,
    .filter-button-prev .ico svg {width:22px; height:22px;}
    .filter-button-next:after,
    .filter-button-prev:after {content:'';}
    
    .btn-eliipsis {display:flex; align-items:center; justify-content:center; width:50px; height:50px; border: 1px solid #e1e2e3; border-radius: 5px; box-shadow: 0 4px 4px rgb(0 0 0 / 5%); color: #939393;}
    
`;

export default InsightFilter