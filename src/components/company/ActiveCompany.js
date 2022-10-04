import styled from "styled-components"
import {Link} from "react-router-dom"

import ActiveCompanyList from "../../components/company/ActiveCompanyList"
import {InnerStyled, H3TitStyled} from "../common/styled"

import { ReactComponent as IcoBookmark } from "../../assets/svg/ico-bookmark.svg";
import { ReactComponent as IcoArr4 } from "../../assets/svg/ico-arr4.svg";

const ActiveCompany = (props) => {
    return (  
        <ActiveCompanyStyled active={props.isFilterFixed}>
            <InnerStyled>
                <div className="btn-wrap">
                    <Link to="/myBookmark" className="btn btn-bookmark">
                        <span className="ico-bookmark"><IcoBookmark /></span>
                        <span>북마크 모아보기</span>
                        <span className="ico-arr"><IcoArr4 /></span>
                    </Link>
                </div>
                <div className="tit-wrap">
                    <H3TitStyled>적극 채용중인 회사</H3TitStyled>
                    <ActiveCompanyList />
                </div>
            </InnerStyled>
        </ActiveCompanyStyled>
    )
}

const ActiveCompanyStyled = styled.div`
    padding-top:${props=>props.active?'220px':'0'};
    .btn-wrap {margin-bottom:12px;}
    .btn-bookmark {display:inline-flex; color:rgb(51, 102, 255); font-size: 15px;  font-weight: 600; line-height: 24px; align-items:center;}
    .btn-bookmark span {display:inline-block;}
    .btn-bookmark .ico-bookmark {width: 11px; height: 16px; margin-right: 8px;}
    .btn-bookmark .ico-arr {margin-left:5px;}
    .btn-bookmark .ico-arr svg {width:10px; height:10px;}
    
`;

export default ActiveCompany