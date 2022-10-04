import styled from "styled-components";

import {Link} from "react-router-dom";

import {InnerStyled} from "../../components/common/styled"

import { ReactComponent as IcoProfile } from "../../assets/svg/ico-profile.svg";
import { ReactComponent as IcoBuilding } from "../../assets/svg/ico-building.svg";

const SectionShortCut = () => {
  return (
    <SectionShortCutStyled>
        <InnerStyled>
            <div className="shortcut-wrap">
                <Link to="/myProfile" className="item item-profile">
                    <span className="ico"><IcoProfile /></span><span className="txt">프로필</span>
                </Link>
                <Link to="#" className="item item-match">
                <span className="ico"><IcoBuilding /></span><span className="txt">매치업</span>
                </Link>
            </div>
                
        </InnerStyled>
       
    </SectionShortCutStyled>
  )
}

const SectionShortCutStyled = styled.div`
    padding:60px 0 85px;
    .shortcut-wrap{display: flex; align-items: center; flex-wrap: wrap; color: #333; font-size: 18px; font-weight: 500; word-break: break-all;}
    .shortcut-wrap .item {display: flex; justify-content: center; align-items: center; flex: 1 0; height: 80px; border-left: 1px solid #fff;}
    .shortcut-wrap .item-profile {background-color: #f2f5ff; border-top-left-radius: 38.5px; border-bottom-left-radius: 38.5px; border-left: none;}
    .shortcut-wrap .item-match {border-top-right-radius: 38.5px; border-bottom-right-radius: 38.5px; background-color: #f2fbf5;}
    .shortcut-wrap .item .ico {display:block; margin-right: 12px; margin-bottom: 1px; width: 28px; height: 28px; }
`;

export default SectionShortCut