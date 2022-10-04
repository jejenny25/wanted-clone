import {useState, useEffect} from "react"
import axios from 'axios';
import styled from "styled-components"
import {Link, useLocation} from "react-router-dom"

import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"
import BtnBookmark2 from "../../components/common/BtnBookmark2"
import BtnMore from "../../components/common/BtnMore"
import BtnMoreBig from "../../components/common/BtnMoreBig"
import Chart from "../../components/common/Chart"

import {InnerStyled, ContainerStyled, BtnMidStyled, LabelStyled, TooltipWrapStyled} from "../../components/common/styled"

const CompanyView = () => {

    // local 변수
    const [isMoreAd, setisMoreAd] = useState(false);
    const [isMoreDetail, setisMoreDetail] = useState(false);
    const [companyInfo, setCompanyInfo] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [companyPictures, setCompanyPictures] = useState([]);
    const [companyTags, setCompanyTags] = useState([]);
    const jwt = window.localStorage.getItem('accessToken');
    const [isFollow, setIsFollow] = useState(false);

    let location = useLocation();
    const companyId = location.state.companyId;
    const url =`https://dev.wanted-clone.site/api/company/${companyId}`;

    useEffect(() => {
        goCompanyInfo();
    }, []);

    const adMore = () => {
        setisMoreAd(!isMoreAd);
    }

    const introMore = () => {
        setisMoreDetail(!isMoreDetail);
    }

    //회사정보 가지고 오기
    const goCompanyInfo = async() => { 
        try{
            const getData = await axios({
                method:'get',
                url: url,
            })
            console.log(getData.data); 
            if(getData.data.code === 1000)
            {
                setCompanyInfo(getData.data.result[0]);
                setJobs(getData.data.result[0].jobs);
                setCompanyPictures(getData.data.result[0].images);
                setCompanyTags(getData.data.result[0].tags);
            }
            //setSigunguList(getData.data.response.body.items.item);
        }
        catch(err){
            console.log(err);
        }
    }

    // 회사 팔로우하기
    const goFollow = async() => {
        const url_follow =`https://dev.wanted-clone.site/api/company/${companyId}/follow`;
        if(jwt === null || jwt === ""){
            alert("로그인이 필요한 서비스 입니다.");
        }else{
            try{
                const getData = await axios({
                    method:'post',
                    url: url_follow,
                    headers: {
                        'x-access-token': jwt
                    }
                })
                // console.log("follow");
                // console.log(getData.data);
                if(getData.data.code === 1000){
                    setIsFollow(true);
                }
            }
            catch(err){
                console.log(err);
            }
        }
    }

    // 회사 팔로우하기
    const goUnFollow = async() => {
        const url_follow =`https://dev.wanted-clone.site/api/company/${companyId}/follow`;
        if(jwt === null || jwt === ""){
            alert("로그인이 필요한 서비스 입니다.");
        }else{
            try{
                const getData = await axios({
                    method:'DELETE',
                    url: url_follow,
                    headers: {
                        'x-access-token': jwt
                    }
                })
                // console.log("unfollow");
                // console.log(getData.data);
                if(getData.data.code === 1000){
                    setIsFollow(false);
                }
            }
            catch(err){
                console.log(err);
            }
        }
    }

    
  return (
    <>
        <Header />
        <ContainerStyled>
            <CompanyViewStyled isMoreAd={isMoreAd} isMoreDetail={isMoreDetail}>
                
                    <div className="company-tit-wrap">
                        <InnerStyled>
                            <div className="tit-wrap">
                                <div className="txt-area">
                                    <div className="logo"><img src={companyInfo.companyLogoImage} alt="" /></div>
                                    <h3>{companyInfo.companyName}</h3>
                                </div>
                                <div className="btn-wrap">
                                    <BtnMidStyled isFollow={isFollow} onClick={isFollow? goUnFollow:goFollow}><span className="txt">팔로우</span></BtnMidStyled>
                                </div>
                            </div>
                            
                        </InnerStyled>
                    </div>
                    <div className="company-cont">
                        <InnerStyled>

                            <div className="company-detail-wrap">
                                <div className="cont-section">
                                    <div className="sec-tit-wrap">
                                        <h4 className="tit">채용 중인 포지션</h4>
                                        <TooltipWrapStyled>
                                            <button type="button" className="btn-tooltip">
                                                <LabelStyled>응답률 매우 높음</LabelStyled>
                                                <div className="tooltip">지원 후 응답받을 확률이 95% 이상입니다.</div>    
                                            </button>
                                        </TooltipWrapStyled>
                                    </div>
                                    <div className="sec-body">
                                        <ul className="ad-list">
                                            {jobs.map((item, index) => (
                                                <li key={item.jobPostingId}>
                                                    <Link to='/adDetail' state={{ jobPostingId : item.jobPostingId}} >
                                                        <p className="position">{item.jobPostingTitle}</p>
                                                        <p className="prize">채용보상금 {item.compensation}원</p>
                                                        <p className="period">{item.periods} {item.periods ==="상시 채용"? "": "까지"}</p>
                                                        <BtnBookmark2 active={false}/>
                                                    </Link>
                                                </li>
                                            ))}
                                            {/* <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 active={true}/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li> */}
                                        </ul>

                                        <ul className="ad-list list-hiding">
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 active={true}/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p className="position">백엔드 개발자</p>
                                                    <p className="prize">채용보상금 1,000,000원</p>
                                                    <p className="period">상시채용</p>
                                                    <BtnBookmark2 />
                                                </Link>
                                            </li>
                                        </ul>

                                        <BtnMoreBig adMore={adMore} isMoreAd={isMoreAd}/>

                                        
                                    </div>
                                </div>

                                <div className="cont-section">
                                    <div className="sec-tit-wrap">
                                        <h4 className="tit">회사 소개</h4>
                                    </div>
                                    <div className="sec-body">
                                        <ul className="picture-list">
                                            {companyPictures.map((item, index) => (
                                                <li key={index}>
                                                    <button type="button" className="btn"><img src={item} alt="" /></button>
                                                </li>
                                            ))}
                                            {/* <li>
                                                <button type="button" className="btn"><img src="images/dummy/company_detail01.jpg" alt="" /></button>
                                            </li>
                                            <li>
                                                <button type="button" className="btn"><img src="images/dummy/company_detail02.jpg" alt="" /></button>
                                            </li>
                                            <li>
                                                <button type="button" className="btn"><img src="images/dummy/company_detail03.jpg" alt="" /></button>
                                            </li> */}
                                            <li>
                                                <button type="button" className="btn">
                                                    <img src="images/dummy/company_detail04.jpg" alt="" />
                                                    <div className="overlay">+ 2</div>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="intro-wrap">
                                            <p className="desc">
                                                {companyInfo.companyDescription}
                                                {/* 해줌은 AI기술과 인공위성 데이터를 활용한 태양광 발전량 예측 기술을 보유하고 있는 에너지 분야의 대표 IT 스타트업입니다.<br /><br/>
                                                국내 최초로 대한민국 햇빛지도를 개발한 해줌은, 이를 바탕으로 일반인도 쉽게 태양광 정보를 접하고 사업성을 검토할 수 있는 태양광 온라인 플랫폼(haezoom.com)을 운영하고 있으며 현재 약 140만 명 이상이 이용하고 있습니다.<br /><br/>
                                                2018년에는 독일 베를린에 유럽법인을 설립해 전 세계 태양광 발전량 예측 기술을 연구하고 있으며, 2018년 UN-서울시 공동 주관의 도시혁신챌린지 최우수상 수상, 2019년 전력거래소 주관 재생에너지 발전량 예측 경진대회에서 기업 중 유일하게 태양광·풍력 부문 동시 수상, 재생에너지 발전량 예측제도 1차 실증사업 테스트 기준치 통과 등의 성과를 통해 그 기술력을 공인받은 바 있습니다.<br /><br/>
                                                2020년에는 ‘그린뉴딜 유망기업 100’으로 선정되며 대한민국 녹색분야 대표 기업으로서 에너지 IT 기업의 선두를 달리고 있으며, 한국에너지공단으로부터 7년 연속 공식 태양광 대여사업자로 선정되어 현재까지 대여사업 가구 수 기준 점유율 1위, 약 3,700개의 발전소를 운영 및 관리하며 태양광 확대 및 보급에 앞장서왔습니다. <br /><br/>
                                                2021년에는 IT 기술을 기반으로 한 태양광 플랫폼 사업자에서 RE100, 수요관리, 발전사업 등 에너지 종합 컨설팅 분야까지 사업을 확장하며, GS에너지로부터 전략적 투자를 유치하여 에너지 플랫폼 및 가상발전소(VPP) 운영자로서의 지위를 굳건히 하였습니다. <br /><br/>
                                                차세대 에너지 혁명의 중심이자 혁신 1순위로 일컬어지는 재생에너지 분야에서, 해줌은 태양광 뿐만 아니라 에너지 전반을 아우르는 기업으로 계속해서 성장하고 있습니다.
                                                <br /><br/>
                                                해줌 : <Link to="http://www.haezoom.com" target="_blank">www.haezoom.com</Link>
                                                해줌 블로그 : <Link to="http://blog.naver.com/haezoom" target="_blank">http://blog.naver.com/haezoom</Link><br/>
                                                해줌 유투브 : <Link to="https://www.youtube.com/user/idnstory" target="_blank">https://www.youtube.com/user/idnstory</Link><br/><br/>

                                                <Link to="http://www.haezoom.com" target="_blank">www.haezoom.com</Link> */}
                                            </p>
                                        </div>
                                        <BtnMore introMore={introMore} isMoreDetail={isMoreDetail}/>
                                    </div>
                                </div>

                                <div className="cont-section">
                                    <div className="sec-tit-wrap">
                                        <h4 className="tit">평균 연봉</h4>
                                        <p className="source">출처 : 국민연금</p>
                                    </div>
                                    <div className="sec-body">
                                        <div className="info-box">
                                            <div className="item">
                                                <p className="tit">신규 입사자</p>
                                                <p className="cont">2,756만원</p>
                                            </div>
                                            <div className="item">
                                                <p className="tit">전체</p>
                                                <p className="cont">3,856만원</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cont-section">
                                    <div className="sec-tit-wrap">
                                        <h4 className="tit">직원수</h4>
                                        <p className="source">출처 : 국민연금</p>
                                    </div>
                                    <div className="sec-body">
                                        <div className="info-box only-one">
                                            <div className="item">
                                                <p className="tit">전체인원</p>
                                                <p className="cont">18</p>
                                            </div>
                                        </div>
                                        <div className="chart-wrap" style={{ width: '100%' }}>
                                            <Chart />

                                            <div className="chart-type-wrap">
                                                <button type="button" className="btn btn-chart-type on"><span>전체 인원</span></button>
                                                <button type="button" className="btn btn-chart-type"><span>입사자수</span></button>
                                                <button type="button" className="btn btn-chart-type"><span>퇴사자수</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="cont-section">
                                    <div className="sec-tit-wrap">
                                        <h4 className="tit">이 회사의 뉴스</h4>
                                    </div>
                                    <div className="sec-body">
                                        <ul className="news-list">
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <p className="tit">해줌, '태양광 SMP 정산 대행' 베타 서비스 출시 - 전기신문</p>
                                                    <p className="from">electimes.com 2022.8.31</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <p className="tit">해줌, '태양광 SMP 정산 대행' 베타 서비스 출시 - 전기신문</p>
                                                    <p className="from">electimes.com 2022.8.31</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <p className="tit">해줌, '태양광 SMP 정산 대행' 베타 서비스 출시 - 전기신문</p>
                                                    <p className="from">electimes.com 2022.8.31</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <p className="tit">해줌, '태양광 SMP 정산 대행' 베타 서비스 출시 - 전기신문</p>
                                                    <p className="from">electimes.com 2022.8.31</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="company-tag-wrap">
                                <div className="sec-tit-wrap">
                                    <h4 className="tit">태그</h4>
                                </div>
                                <ul className="tag-list">
                                    {companyTags.map((item) => (
                                            <li key={item.companyTagId}>
                                                <Link to="#">#{item.companyTagContent}</Link>
                                            </li>
                                    ))}
                                    <li><Link to="#">#휴게실</Link></li>
                                    <li><Link to="#">#생일선물</Link></li>
                                    <li><Link to="#">#건강검진</Link></li>
                                    <li><Link to="#">#동호회</Link></li>
                                    <li><Link to="#">#도서구매비</Link></li>
                                    <li><Link to="#">#IT, 컨텐츠</Link></li>
                                    <li><button type="button" className="btn btn-tag-more">+ 태그 의견보내기</button></li>
                                </ul>
                            </div>
                        </InnerStyled>
                    </div>
                
            </CompanyViewStyled>

        </ContainerStyled>

        <Footer />
    </>
  )
}
const CompanyViewStyled = styled.div`
    .company-tit-wrap{width: 100%; border-bottom: 1px solid #e1e2e3; background-color: #fff;}
    .company-tit-wrap .tit-wrap {display:flex; height: 90px; justify-content:space-between; align-items:center;}
    .company-tit-wrap .tit-wrap .txt-area {display:flex; align-items:center;}
    .company-tit-wrap .tit-wrap .txt-area h3 {font-size:26px; font-weight: 600;}    
    .company-tit-wrap .tit-wrap .txt-area .logo {width: 50px; height: 50px; margin-right:15px; border: 1px solid #f1f1f2;}
    .company-tit-wrap .tit-wrap .txt-area .logo img {width:100%; height:100%;}

    .company-cont {padding:40px 0;}
    .company-cont > div {display:flex;}
    .company-detail-wrap {width: calc(70% - 20px); min-height: 500px; margin-right: 20px;}
    .company-tag-wrap {width: calc(30% - 10px); margin-left: 20px; margin-right: -10px;}

    .sec-tit-wrap {display:flex; margin-bottom:20px; align-items:center;}
    .sec-tit-wrap .tit{margin-right:10px; font-size: 22px; font-weight: 600; line-height:1;}
    .sec-tit-wrap .source {margin-left:auto; font-size: 13px; font-weight: 600; line-height: 1; color: #b5b5b5;}

    .cont-section + .cont-section {margin-top:80px;}

    /* 채용공고*/
    .ad-list {display:grid; grid-template-columns: repeat(2, 1fr); grid-gap:20px 20px;}
    .ad-list li {overflow-x:auto;}
    .ad-list li a {display:block; position:relative; padding: 16px 20px 19px; border-radius: 3px; border: 1px solid #e1e2e3;}
    .ad-list li a .position {width: calc(100% - 40px); font-size: 18px; line-height: 1.4; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #333;}
    .ad-list li a .prize {font-size: 14px; font-weight: 400; line-height: 1; color: #86939e; margin-top: 3px;}
    .ad-list li a .period {color: #666; font-weight:600; margin-top: 15px; line-height:1;}

    .ad-list.list-hiding {margin-top:20px; display:${props=>props.isMoreAd?'grid':'none'};}

    .ad-list + button {margin-top:20px;}
    
    /* 회사 소개 */
    .picture-list {display:flex;}
    .picture-list li {width: calc(25% - 10px);}
    .picture-list li + li {margin-left:10px;}
    .picture-list li .btn {display:block; position:relative; width:100%;}
    .picture-list li .btn img {width:100%;}
    .picture-list li:last-child .overlay {position:absolute; display:flex; align-items:center; justify-content:center; width:100%; height:100%; top:0; left:0; background-color:rgba(51,51,51,.3); color:#fff; font-weight:600; font-size:20px;}

    .intro-wrap {position: relative; font-size: 16px; line-height: 27px; width: 100%; white-space: pre-wrap; max-height:${props=>props.isMoreDetail?'none':'81px'}; padding-bottom:${props=>props.isMoreDetail?'38px':'0'}; margin-top:15px; overflow: hidden;}
    .intro-wrap .desc { white-space: pre-wrap;}

    /* 평균 연봉 */
    .info-box {position: relative; display:flex; border-radius: 3px; background-color: #f4f5f7; min-height:72px; align-items:center;}
    .info-box .item {display:flex; width:50%; padding:0 40px; align-items:center; justify-content:space-between;}
    .info-box .item + .item:before {display:inline-block; width:1px; height:38px; background-color:#e1e2e3; content:'';}
    .info-box .item .tit {font-size: 15px; font-weight: 600; line-height: 1; color: #999;}
    .info-box .item .cont {font-size:20px; font-weight:600;}
    .info-box.only-one .item {width:100%; justify-content:center;}
    .info-box.only-one .item .tit{margin-right:25px;}

    .chart-wrap {margin-top:25px;}
    .chart-type-wrap {display:flex; width:320px; margin:20px auto 0;}
    .chart-type-wrap .btn {display:flex; padding:10px; align-items:center; justify-content:center; flex:1; border:1px solid #999; color:#999;}
    .chart-type-wrap .btn.on {border-color:#258bf7; color:#258bf7; border-radius: 3px; font-weight:600;}
    .chart-type-wrap .btn + .btn {border-left:0; border-right:0;}
    .chart-type-wrap .btn:last-child { border-right:1px solid #999; color:#999;}

    /* 회사 뉴스 */
    .news-list {display:grid;  grid-template-columns: repeat(2, 1fr); grid-gap:20px 20px;}
    .news-list li a {position: relative; display:block; padding: 20px;border: 1px solid #e1e2e3; border-radius: 3px;}
    .news-list li a .tit {font-size: 16px; font-weight: 600; line-height: 22px; color: #333; height: 44px; overflow: hidden; margin-bottom: 16px;}
    .news-list li a .from {color: #666; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
    
    /* 태그 */
    .tag-list li {display:inline-block;}
    .tag-list li a,
    .tag-list li button {display: inline-block; padding: 12px 16px; font-size: 14px; font-weight: 500; line-height: 1; color: #333; background-color: #f3f5f8; border-radius: 20px; margin-right: 6px; margin-bottom: 10px;}
    .tag-list li button {color: #999; border: 1px dashed #ccc; padding: 12px 16px; background-color:#fff;}
`;

export default CompanyView