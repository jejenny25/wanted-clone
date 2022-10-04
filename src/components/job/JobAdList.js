import styled from "styled-components"
import {Link} from "react-router-dom"

import axios from 'axios';

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import data from "../../db/data.json" // json 객체를 data라는 변수에 넣어 임포트

import {InnerStyled, LabelStyled, TooltipWrapStyled} from "../common/styled"

import BtnBookmark from "../../components/common/BtnBookmark"
import BtnLike from "../../components/common/BtnLike"



const JobAdList = (props) => {

    const schWord = useSelector(state => state.searchInfo.schWord);

    const AdListDummy = data.adlist.filter(item => item.jobPostingTitle.includes(schWord));

    const url =`https://dev.wanted-clone.site/api/job-postings/`;

    const [AdList,setAdList] = useState([]);
    //const [companyInfo,setCompanyInfo] = useState([]);

    useEffect(() => {
        getCompanyList();
    }, []);

    const getCompanyList = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url,
            })
            console.log(getData.data); 
            if(getData.data.code === 1000)
            {
                setAdList(getData.data.result);
                // const newArr = AdList.concat(data.adlist);
                // setAdList(newArr);
                // console.log(newArr);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return (  
        <JobAdListStyled>
            <InnerStyled>
                {AdList.length > 0 ? 
                    <ul className="job-ad-list">
                        { AdList
                            .filter(item => item.jobPostingTitle.includes(schWord))
                            .map((item) => (
                            <li key={item.jobPostingId}>
                                <Link to="/adDetail">
                                    <div className="thumbnail">
                                        <img src={item.company[0].companyImage} alt="" />
                                        {props.listType === "bookmark"
                                            ? <BtnBookmark active={false}/>
                                            : <BtnLike active={true}/>
                                        }
                                    </div>
                                    <div className="detail-wrap">
                                        <p className="title">{item.jobPostingTitle}</p>
                                        <p className="company-nm">{item.company[0].companyName}</p>
                                        {item.replyRate?
                                            <TooltipWrapStyled>
                                                <button type="button" className="btn-tooltip">
                                                    <LabelStyled>응답률 매우 높음</LabelStyled>
                                                    <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                                </button>
                                            </TooltipWrapStyled>
                                            :""
                                        }
                                        <p className="area">{item.company[0].companyLocation}.{item.company[0].companyCountry}</p>
                                        <p className="compensation">채용보상금 {item.compensation}원</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                        { AdListDummy
                            .filter(item => item.jobPostingTitle.includes(schWord))
                            .map((item) => (
                            <li key={item.jobPostingId}>
                                <Link to="/adDetail">
                                    <div className="thumbnail">
                                        <img src={item.company[0].companyImage} alt="" />
                                        {props.listType === "bookmark"
                                            ? <BtnBookmark active={false}/>
                                            : <BtnLike active={true}/>
                                        }
                                    </div>
                                    <div className="detail-wrap">
                                        <p className="title">{item.jobPostingTitle}</p>
                                        <p className="company-nm">{item.company[0].companyName}</p>
                                        {item.response?
                                            <TooltipWrapStyled>
                                                <button type="button" className="btn-tooltip">
                                                    <LabelStyled>응답률 매우 높음</LabelStyled>
                                                    <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                                </button>
                                            </TooltipWrapStyled>
                                            :""
                                        }
                                        <p className="area">{item.company[0].companyLocation}.{item.company[0].companyCountry}</p>
                                        <p className="compensation">채용보상금 {item.compensation}원</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                        
                        {/* <li>
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
                        </li> */}
                    </ul>
                :
                    <div className="no-result">
                        <p className="txt">바로 지원할 곳이 없다면?<br /><br />매치업에 등록하고 면접제안 받으세요!</p>
                        <div className="btn-wrap">
                            <button type="button" className="btn">매치업 등록하기</button>
                        </div>
                    </div>
                }
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

    .no-result {font-size: 18px; font-weight: 400; line-height: 1.5; letter-spacing: normal; text-align: center; color: #333; margin: 150px auto 20px;}
    .no-result .btn {width: 150px; height: 40px; border-radius: 34px; background-color: #36f; font-size: 14px; font-weight: 600; color: #fff; margin: 20px 0 100px;}
`;

export default JobAdList