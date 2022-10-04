import styled from "styled-components"
import {Link} from "react-router-dom"

import {InnerStyled, LabelStyled, TooltipWrapStyled} from "../common/styled"

import BtnBookmark from "../../components/common/BtnBookmark"
import BtnLike from "../../components/common/BtnLike"

const JobAdList = (props) => {

    return (  
        <JobAdListStyled>
            <InnerStyled>
                <ul className="job-ad-list">
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adDetail">
                            <div className="thumbnail">
                                <img src="images/dummy/job_ad_company.png" alt="" />
                                {props.listType === "bookmark"
                                    ? <BtnBookmark active={true}/>
                                    : <BtnLike active={true}/>
                                }
                            </div>
                            <div className="detail-wrap">
                                <p className="title">React Native App 개발 (병역특례 전문연구요원 / 산업기능요원 가능)</p>
                                <p className="company-nm">딥센트</p>
                                <TooltipWrapStyled>
                                    <button type="button" className="btn-tooltip">
                                        <LabelStyled>응답률 매우 높음</LabelStyled>
                                        <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                    </button>
                                </TooltipWrapStyled>
                                <p className="area">서울.한국</p>
                                <p className="compensation">채용보상금 1,000,000원</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </InnerStyled>
        </JobAdListStyled>
    )
}

const JobAdListStyled = styled.div`
    .job-ad-list {display:grid; width:100%; grid-template-columns: repeat(4, 1fr); grid-gap:15px;}
    .job-ad-list li .thumbnail {position:relative; width:100%; height:187px; border-radius:4px; box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%); overflow:hidden;}
    .job-ad-list li .thumbnail img {width:100%; height:187px; object-fit: cover; vertical-align: bottom; }

    .job-ad-list li .detail-wrap {padding:14px 0;}
    .job-ad-list li .detail-wrap .title {display: -webkit-box; position: relative;text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: #333; font-size: 18px; font-weight: 600; line-height: 1.2; overflow: hidden; word-break: break-word; text-overflow: ellipsis; max-height:44px;}
    .job-ad-list li .detail-wrap .company-nm {font-size: 14px; font-weight:600; word-break: break-word; width: 100%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-top: 10px;}
    .job-ad-list li .detail-wrap .area {margin-top:10px; color: #999;}
    .job-ad-list li .detail-wrap .compensation {margin-top: 10px; color: #333; font-size: 14px; font-weight: 500;}
`;

export default JobAdList