import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../../components/common/styled"

import { ReactComponent as WantedLogo } from "../../assets/svg/wanted_logo.svg";
import { ReactComponent as IcoChk } from "../../assets/svg/ico-chk.svg";

const SectionBanner3 = () => {
  return (
    <SectionBanner3Styled>
        <InnerStyled>
            <div className="txt-wrap">
                <div className="tit">
                    <span className="logo"><WantedLogo /></span>
                    <p>구독해야 하는 이유</p>
                </div>
                <p className="sub-tit">구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                <Link to="#" className="btn">
                    <IcoChk />첫 구독 0원 신청하기
                </Link>
            </div>
            <div className="img"><img src="images/main/banner_wanted.png" alt="" /></div>
        </InnerStyled>
    </SectionBanner3Styled>
  )
}

const SectionBanner3Styled = styled.div`
    background-color:#f7f7f7;
    > div {display:flex; align-items:center; justify-content:space-between; padding: 60px 0; flex-wrap: wrap;}
    .txt-wrap .tit {display:flex; align-items:center; font-size: 30px; font-weight: 700;}
    .txt-wrap .tit .logo {width:160px; height:31px; margin-right:5px;}
    .txt-wrap .tit .logo svg {width:160px;}
    .txt-wrap .btn {display:flex; justify-content:center; align-items:center; border-radius:25px;height: 50px;width: 260px; margin-top: 25px; font-size: 16px; font-weight:600; color: #fff; background-color: #36f; border: none;} 
    .txt-wrap .btn svg {width:15px; height:15px; margin-right:5px;}

    .img {width:545px;}
    .img img {width:100%;}
`;

export default SectionBanner3