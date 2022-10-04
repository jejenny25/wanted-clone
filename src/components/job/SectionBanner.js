import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../../components/common/styled"

import { ReactComponent as IcoSch } from "../../assets/svg/ico-sch.svg";

const SectionBanner = () => {
  return (
    <SectionBannerStyled>
        <InnerStyled>
            <Link to="#" className="banner">
                <p className="txt"><span className="ico"><IcoSch /></span>채용중인 포지션 보러가기</p>
            </Link>
        </InnerStyled>
    </SectionBannerStyled>
  )
}

const SectionBannerStyled = styled.div`
    .banner {display:flex; align-items:center; justify-content:center; background-image:linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%); padding: 21px 30px; margin-top:60px; border-radius: 38.5px;}
    .banner .txt { display:flex; align-items:center; font-size: 17px; font-weight:700; color: #fff;}
    .banner .txt .ico {width: 28px; height:28px; fill:#fff; margin-right:15px;}
    .banner .txt .ico svg {width:28px; height:28px;}
`;

export default SectionBanner