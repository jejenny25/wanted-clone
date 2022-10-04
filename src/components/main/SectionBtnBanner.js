import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../common/styled"

import { ReactComponent as IcoSch } from "../../assets/svg/ico-sch.svg";
import { ReactComponent as IcoProfile } from "../../assets/svg/ico-profile.svg";
import { ReactComponent as IcoBuilding } from "../../assets/svg/ico-building.svg";
import { ReactComponent as IcoFilter } from "../../assets/svg/ico-filter.svg";
import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SectionBtnBanner = () => {
  return (
    <SectionBtnBannerStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <p className="tit">채용 정보를 찾고 계셨나요?</p>
            </div>
            <div className="banner-wrap">
                <Link to="#" className="btn-banner">
                    <div className="ico"><IcoSch /></div>
                    <div className="txt">채용공고<IcoArr5 /></div>
                </Link>
                <Link to="#" className="btn-banner">
                    <div className="ico"><IcoProfile /></div>
                    <div className="txt">내 프로필<IcoArr5 /></div>
                </Link>
                <Link to="#" className="btn-banner">
                    <div className="ico"><IcoBuilding /></div>
                    <div className="txt">매치업<IcoArr5 /></div>
                </Link>
                <Link to="#" className="btn-banner">
                    <div className="ico"><IcoFilter /></div>
                    <div className="txt">직군별 연봉<IcoArr5 /></div>
                </Link>
            </div>
        </InnerStyled>
    </SectionBtnBannerStyled>
  )
}

const SectionBtnBannerStyled = styled.div`
    padding:60px 0 0;
    .tit-wrap {display: flex; align-items:center; justify-content:center;}
    .tit-wrap .tit {font-size:22px;line-height: 1.33; font-weight: 700; color: #333;}
    .banner-wrap {display:flex; margin-top:30px;}
    .banner-wrap .btn-banner {display:flex; flex-direction:column; align-items:center; justify-content:center; flex:1; padding-top:18px; border:1px solid #ececec}
    .banner-wrap .btn-banner + .btn-banner {border-left:0;}
    .banner-wrap .btn-banner .ico {width:32px; height:32px;}
    .banner-wrap .btn-banner .ico svg {width:32px; height:32px;}
    .banner-wrap .btn-banner .txt {display:flex; align-items:center; height: 50px; font-size: 16px; font-weight:600;}
    .banner-wrap .btn-banner .txt svg {position:relative; top:-2px; width:16px; height:16px; margin-left:3px;}
`;

export default SectionBtnBanner