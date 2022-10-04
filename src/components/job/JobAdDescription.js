import styled from "styled-components"
import {Link} from "react-router-dom"

import JobAdDescriptionTxt from "../../components/job/JobAdDescriptionTxt"

const JobAdDescription = () => {
  return (
    <JobDescriptionStyled>
        <div className="desc-head">
            <div className="tit-wrap">
                <h3 className="job-tit">서버 개발 팀장급</h3>
            </div>
            <div className="sub-info-wrap">
                <Link to="#" className="company-nm">케이에스티모빌리티(KST Mobility) </Link>
                <div className="area">서울<span>&middot;</span>한국</div>
            </div>
            <div className="tag-wrap">
                <ul className="tag-list">
                    <li><Link to="#">#연봉업계평균이상</Link></li>
                    <li><Link to="#">#퇴사율5%이하</Link></li>
                    <li><Link to="#">#50명이하</Link></li>
                    <li><Link to="#">#설립4~9년</Link></li>
                    <li><Link to="#">#커피</Link></li>
                    <li><Link to="#">#IT, 컨텐츠</Link></li>
                </ul>
            </div>
        </div>

        <JobAdDescriptionTxt />
    </JobDescriptionStyled>
  )
}

const JobDescriptionStyled = styled.div`
    .desc-head {margin:40px 0 30px;}
    .tit-wrap .job-tit {margin-bottom:10px; font-size: 22px; font-weight: 600;}
    .sub-info-wrap {display:flex;}
    .sub-info-wrap .company-nm {font-weight:600;}
    .sub-info-wrap .area {position:relative; margin-left:10px; padding:0 10px; color:#999;}
    .sub-info-wrap .area::before {content: ""; display: block; width: 1px; height: 12px; background: #e1e2e3; position: absolute; top: 4px; left: 0;}
    .sub-info-wrap .area span {display:inline-block; margin:0 5px;}
    .tag-list {margin-top:20px;}
    .tag-list li {display:inline-block;}
    .tag-list li a {display: inline-block; margin-right: 6px; margin-bottom: 10px; padding: 9px 14px; font-size: 12px; font-weight: 500; line-height: 1; color: #333; background-color: #f3f5f8; border-radius: 25px;}
`;


export default JobAdDescription