import styled from "styled-components";

import {Link} from "react-router-dom";

import { ReactComponent as IcoArr5 } from "../../assets/svg/ico-arr5.svg";

const InsightList = () => {
  return (
    <InsightListStyled>
        <ul className="list">
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb01.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">성장하는 인하우스 디자이너 되기 - 사이드 프로젝트편</p>
                        <p className="sub-txt">본업 못지 않게 열심히 사이드 프로젝트를 하는 분들이 있습니다. 이분들은 과연 어떤 갈증이 있었기에 사이드 프로젝트를 하게 되었을까요? 그리고 사이드 프로젝트를 진행하면 어떤 점이 좋을까요? 사이드 프로젝트의 장점과, 프로젝트를 진행하며 느낀 점에 대해서 솔직하게 이야기를 나눠봤습니다.</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo01.png" alt="브런치 로고" /></div>
                            <p className="txt">캐치패션 최규성, 제주맥주 안소현, 샵백 나예성, 차봇 모빌리티 이은지</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb02.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">[원티드 기고] 스타트업 팀장의 퇴사를 만드는 3가지</p>
                        <p className="sub-txt">"입사 3년 차인데, 오늘부터 제가 리더라고요?" 스타트업에서 일하기 '스타트업 팀장의 퇴사를 만드는 3가지' 라는 주제입니다. 더 많은 글은 아래 링크를 들어가서 읽어 주시면 됩니다 ^^ 일부만 공유드려요   [1]  요즘은 글을 쓰는 기회를 많이 접하게 됩니다. 달라진 점은 과거에는 내 생각을 기록하던 것에서 '주제와 목적'이 정해진 글을 쓰는 기회들이</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo01.png" alt="브런치 로고" /></div>
                            <p className="txt">그로플 백종화</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb03.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">1인 사업자에서 '창업자'로 거듭나기</p>
                        <p className="sub-txt">매달 마지막 일요일에는 '스여일삶' 멤버들과 회고록을 쓰는 온라인 모임을 한다. 7월의 마지막 일요일은 지난주였지만, 지난주에 화학적 유산 경험에 대한 글을 올리느라 회고록을 못 썼다. 그래서 8월이 시작되었지만 7월의 회고록을 늦게나마 올려본다.    #1. 1인 사업자에서 '창업자'로 거듭나기   6월 회고에 썼던 것처럼 7월은 '컨텐츠 마케터' 님을 .</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo02.png" alt="브런치 로고" /></div>
                            <p className="txt">이은지</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb04.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">CEO 출신 코치들의 경영자 코칭</p>
                        <p className="sub-txt">이제는 한국에도 포춘 500대 기업처럼, 그리고 실리콘밸리처럼 코치 문화가 필요합니다. 포스코에너지 CEO 출신 코치의 라이브톡을 통해 CEO와 리더가 기업을 변화시키기 위해 어떤 성찰을 하고 어떤 리더십을 발휘해야 할지 알아보세요!</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo02.png" alt="브런치 로고" /></div>
                            <p className="txt">코치경영원 윤동진</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb05.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">변화를 즐기는 팀을 만들어볼까요? - 김윤혁</p>
                        <p className="sub-txt">아무리 잘해줘도 사표를 내미는 직원은 무슨 이유 때문일까요? 회사에서 리더로서 겪을 수 있는 문제와 고민에 대해 살펴보고, 팀원과 조직원들을 동기부여할 수 있는 공감 소통법에 대해 함께 이야기 합니다.</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo01.png" alt="브런치 로고" /></div>
                            <p className="txt">노무법인 예담HR컨설팅 장내석</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb06.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">부하직원이 말하지 않는 31가지 진실</p>
                        <p className="sub-txt">리더십은 함께 일하고 따르는 사람들을 통해 완성됩니다. 이번 Talk에서는 리더의 자기 인식, 구성원 동기유발, 사람을 보는 안목, 일하는 방법과 환경과 관련된 리더가 흔하게 빠지기 쉬운 31가지의 착각을 소개합니다.</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo02.png" alt="브런치 로고" /></div>
                            <p className="txt">박태현</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb07.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">패널토론 Global Leadership - 태조영, 김덕중, 이채희</p>
                        <p className="sub-txt">본 글은 개인 경험을 바탕으로 서술된 글입니다. 정답이 아닌 생각의 실마리를 제공하고 각자 나름의 모습을 고민할 수 있는 재료로 만들어갈 수 있길 희망합니다.  HR을 하면서 늘 조직 내에서 공식적인 의사결정구조를 가지고 있는 리더를 강조합니다. 모 외국계 기업에서 일하시다가 나오신 어느 분은 저에게 자신이 있었던 그 기업에서는 HR을 리더가 하지 HR실무</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo01.png" alt="브런치 로고" /></div>
                            <p className="txt">Opellie</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <div className="thumbnail"><img src="images/dummy/insight_thumb08.jpg" alt="" /></div>
                    <div className="txt-wrap">
                        <p className="tit">'리더'에 대해 생각해보기-방향성</p>
                        <p className="sub-txt">글로벌 리더십은 어떻게 변화하고 있을까요? 패널토론 영상을 통해 확인하세요.</p>
                        <div className="writer">
                            <div className="logo"><img src="images/dummy/insight_logo01.png" alt="브런치 로고" /></div>
                            <p className="txt">캐치패션 최규성, 제주맥주 안소현, 샵백 나예성, 차봇 모빌리티 이은지</p>
                        </div>
                    </div>
                </Link>
            </li>
        </ul>

        <button type="button" className="btn btn-more">더 많은 컨텐츠 보기<span className="ico"><IcoArr5 /></span></button>
    </InsightListStyled>
  )
}

const InsightListStyled = styled.div`
    .list {display:grid; grid-template-columns: repeat(4, 1fr); grid-gap:50px 20px;}
    .list li {overflow-x:hidden;}
    .list .thumbnail {position:relative; height: auto; padding-bottom: 70%;}
    .list .thumbnail img {position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 4px;object-fit: cover; object-position: top; border: 1px solid rgba(0,0,0,.05); outline-offset: -1px;}
    .list .txt-wrap {padding-top:17px}
    .list .txt-wrap .tit {display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; font-weight: 700; font-size: 16px; line-height: 24px; color: #333; margin-bottom: 8px;}
    .list .txt-wrap .sub-txt{display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; font-weight: 600; font-size: 13px; line-height: 21px; color: #aaa;}
    .list .txt-wrap .writer {display:flex; margin-top:12px; align-items:center;}
    .list .txt-wrap .writer .logo {width:30px; height:30px; overflow:hidden; border-radius:50%; border: 1px solid #ececec; flex-shrink:0;}
    .list .txt-wrap .writer .logo img {width:100%;}
    .list .txt-wrap .writer .txt {margin-left: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; font-size: 13px; line-height: 19px; color: #aaa;} 
    
    .btn-more {display:flex; align-items:center; justify-content:center; width: 345px; color: #333; margin: 50px auto 0; height: 50px; font-size: 16px; background-color: #fff; border: 1px solid #e1e2e3;border-radius: 25px; }  
    .btn-more .ico {display:block; width: 15px; height: 15px; margin-left:5px; transform: rotate(90deg);}
    
`;

export default InsightList