import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../../components/common/styled"

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const SectionBanner2 = () => {
  return (
    <SectionBanner2Styled>
        <InnerStyled>
            <Link to="#" className="banner">
                <p className="txt">직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. <span className="emoji">👀</span> <span className="ico"><IcoArr5 /></span></p>
            </Link>
        </InnerStyled>
    </SectionBanner2Styled>
  )
}

const SectionBanner2Styled = styled.div`
    .banner {display:flex; align-items:center; justify-content:center; background-image:linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%); padding: 21px 30px; border-radius: 38.5px;}
    .banner .txt { display:flex; align-items:center; font-size: 17px; color: #fff;}
    .banner .txt .ico {width: 17px; height:17px; fill:#fff;}
    .banner .txt .ico svg {width:17px;}
`;

export default SectionBanner2