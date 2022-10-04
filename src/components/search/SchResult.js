import styled from "styled-components";

import { Link } from "react-router-dom";
import SchCompany from "../../components/search/SchCompany";
import Selector  from "../../components/common/Selector";
import TagSlide from "../../components/job/TagSlide";
import JobAdList from "../../components/job/JobAdList"

import {InnerStyled} from "../../components/common/styled";

import { ReactComponent as IcoArr2 } from "../../assets/svg/ico-arr2.svg";

const SchResult = () => {
  return (
    <InnerStyled>
        <SchResultStyled>
            <div className="sec-result">
                <div className="tit-wrap">
                    <p className="tit">연관 직무 <span>3</span></p>
                </div>
                <div className="category-wrap">
                    <Link to="#" className="item">개발</Link>
                    <Link to="#" className="item">.NET 개발자</Link>
                    <Link to="#" className="item">자바 개발자</Link>
                </div>
            </div>

            <div className="sec-result">
                <div className="tit-wrap">
                    <p className="tit">회사 <span>3</span></p>
                </div>
                <SchCompany />
            </div>

            <div className="sec-result">
                <div className="tit-wrap">
                    <p className="tit">포지션 <span>667</span></p>
                </div>

                <div className="filter-btn-wrap">
                    <div className="filter-side">
                        <button type="button" className="btn btn-filter"><span className="tit">지역</span><span className="txt">한국</span></button>
                        <button type="button" className="btn btn-filter"><span className="tit">경력</span><span className="txt">전체</span><span className="ico"><IcoArr2/></span></button>
                        <button type="button" className="btn btn-filter"><span className="tit">기술스택</span><span className="ico"><IcoArr2/></span></button>
                    </div>
                    <div className="order-side">
                        <Selector/>
                    </div>
                </div>
                <TagSlide />
                <div className="list-wrap">
                    <JobAdList listType={"bookmark"}/>
                </div>
            </div>
        </SchResultStyled>
    </InnerStyled>
  )
}

const SchResultStyled = styled.div`
    padding-top:60px;
    .sec-result + .sec-result {margin-top:60px}
    .sec-result .tit-wrap {margin-bottom: 18px;}
    .sec-result .tit-wrap .tit {font-size: 24px; font-weight: 600; line-height: 36px; color: #333;}
    .sec-result .tit-wrap .tit span {display:inline-block; margin-left: 10px; font-weight: 400;}

    .category-wrap .item {display: inline-block; background-color: #fff; text-align: center; padding: 0 18px; height: 40px; line-height: 40px; border: 1px solid #e1e2e3; border-radius: 20px; font-size: 16px; font-weight: 400; color: #333; margin: 0 6px 6px 0;}
    .sec-result .swiper-button-next::before {background:linear-gradient(90deg,hsla(0,0%,100%,0),#f8f8f8 50%)}
    .sec-result .swiper-button-prev::before {background:linear-gradient(270deg,hsla(0,0%,100%,0),#f8f8f8 50%);}
    .sec-result .list-wrap {margin-top:25px;}
`;

export default SchResult