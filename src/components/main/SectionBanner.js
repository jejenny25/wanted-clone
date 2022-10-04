 import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../common/styled"

const SectionBanner = () => {
  return (
    <SectionBannerStyled>
        <InnerStyled>
            <div className="txt-wrap">
                <p className="txt">즐겨보는 <span>크리에이터의</span> 글도 추천하고 싶다면?</p>
                <div className="img"><img src="images/main/img_banner.png" alt="" /></div>
            </div>
            <Link to="#" className="btn">크리에이터 추천하기</Link>
        </InnerStyled>
    </SectionBannerStyled>
  )
}

const SectionBannerStyled = styled.div`
    display: flex; align-items: center;
    height: 110px;
    background-color: #36f;
    > div {display: flex; align-items: center; justify-content: space-between;}
    .txt-wrap {display: flex; width:80%; align-items:center;}
    .txt-wrap .txt {font-size: 24px; color: #fff; font-weight: 500; line-height: 35px; letter-spacing: -.2px;}
    .txt-wrap .txt span {color:#a9ecf0;}
    .btn {display:flex; align-items:center; justify-content:center; width:220px;height: 40px; font-size: 15px; font-weight:700; color: #36f; background-color: #fff; border: 1px solid #36f; border-radius: 25px; }
    
`;

export default SectionBanner