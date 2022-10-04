import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../../components/common/styled"

const SectionBanner2 = () => {
  return (
    <SectionBanner2Styled>
        <InnerStyled>
            <Link to="#" className="banner">
            
                <div className="txt-wrap">
                    <p className="txt">입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
                    <span className="fake-btn">지금 확인하기</span>
                </div>
                <div className="img"><img src="images/mypage-banner.png" alt="" /></div>
            </Link>
        </InnerStyled>
       
    </SectionBanner2Styled>
  )
}

const SectionBanner2Styled = styled.div`
    background: linear-gradient(90deg,#ddebff -.28%,#b7d8ff);
    .banner {display:flex; position:relative; align-items:center; justify-content:flex-start; height: 150px; border-radius: 0; }
    .banner .txt {font-size: 24px; line-height: 29px; font-weight: 700; color: #5071dc;}
    .banner .fake-btn {display:inline-flex; justify-content:center;align-items:center; margin-top: 10px; height: 36px; font-size: 14px; width: 119px; border-radius: 25px; background-color: #5071dc; color: #fff; font-weight: 700;}
    .banner .img {position: absolute; right: 30px; bottom: -12px; width: 236px; height: 169px; margin-bottom: 12px; overflow-y: hidden;}
    .banner .img img {position: relative; bottom: -12px; width:100%;}
`;

export default SectionBanner2