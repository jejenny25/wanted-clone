import styled from "styled-components";

import {InnerStyled,  BtnBigStyled, BtnBigBorderGrayStyled} from "../../components/common/styled"

const ResumeExample = () => {
    return (
        <ResumeExampleStyled>
            <InnerStyled>
                <div className="tit-wrap">
                    <h2 className="tit">쓰는 사람도 보는 사람도 편하게</h2>
                </div>
                <div className="example-wrap">
                    <div className="section01">
                        <p className="name">김티드</p>

                        <div className="para-wrap">
                            <div className="txt-area">
                                <p className="txt">이메일: wanted@wantedlab.com<br />연락처: 000-0000-0000</p>
                            </div>
                            <div className="bubble">성별, 사진 등 불필요한 개인정보 최소화</div>
                        </div>
                        <p>
                            Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자 김티드입니다.<br />
                            새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이 많습니다.
                        </p>
                        <div className="para-wrap">
                            <div className="txt-area">
                                <ul>
                                    <li>웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                                    <li>다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도</li>
                                    <li>제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수</li>
                                    <li>프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                                </ul>
                            </div>
                            <div className="bubble">깔끔한 UI와 가독성 높은 디자인</div>
                        </div>
                    </div>
                    <div className="section02">
                        <p className="sub-tit">경력</p>
                        <div className="sub-cont">
                            <div className="career-item">
                                <div className="company-info">
                                    <div>
                                        <p className="name">원티드랩</p>
                                        <p className="position">프론트엔드팀 / 팀원</p>
                                    </div>
                                    <div className="date">2020.07 - 현재 재직중</div>
                                </div>
                                <div className="detail">
                                    <ul>
                                        <li>
                                            <div>
                                                <p className="tit"><span>웹사이트 SEO</span>2022.05 - 2022.06</p>
                                                <p className="txt">
                                                    도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별 메타태그/키워드 검증<br />
                                                    - 성과: 오가닉 트래픽 30% 증가<br />
                                                    - 사용 기술: Next.js, Google Search Console<br />
                                                    - 링크: https://www.wanted.co.kr<br />
                                                </p>
                                            </div>
                                            <div className="bubble">업무 강점과 경력을 강조하는 템플릿</div>
                                        </li>
                                        <li>
                                            <div>
                                                <p className="tit"><span>글로벌 채용 서비스 신규 개발</span>2021.08 - 2022.04</p>
                                                <p className="txt">
                                                    메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종 컴포넌트 개발 (기여도 70%)<br />
                                                    - 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스 출시<br />
                                                    - 사용 기술: React.js, Next.js, redux, styled-component<br />
                                                    - 링크: https://www.wantedglobal.com<br />
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="career-item">
                                <div className="company-info">
                                    <div>
                                        <p className="name">한국빅컴퍼니</p>
                                        <p className="position">디지털기술개발팀 / 팀원</p>
                                    </div>
                                    <div className="date">2018.03 - 2020.06</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerStyled>
            <div className="btn-wrap">
                <InnerStyled>
                    <BtnBigBorderGrayStyled>샘플 다운로드</BtnBigBorderGrayStyled>
                    <BtnBigStyled>새 이력서 작성</BtnBigStyled>
                </InnerStyled>
            </div>
        </ResumeExampleStyled>
    )
}

const ResumeExampleStyled = styled.div`
    padding-top:100px;
    background-color:#f2f4f7;
    position:relative;
    :after {content: ""; position: absolute; left:0; bottom:204px; width: 100%; height: 150px; background: linear-gradient(180deg,hsla(0,0%,97%,0),#f8f8f8);}
    .tit-wrap .tit {font-weight:600; font-size:40px; text-align:center;}
    .example-wrap {position:relative; margin-top:50px; padding: 90px 90px 20px; background-color: #fff;}
    /* .example-wrap:after {content: ""; position: absolute; left:0; bottom: 0; width: 100%; height: 150px; background: linear-gradient(180deg,hsla(0,0%,97%,0),#f8f8f8);} */
    
    .example-wrap .bubble {display:flex;justify-content: space-between; padding:0 15px; align-items: center; width: fit-content; height: 36.55px; background-color: #f8f8f8; border-radius: 5px; font-weight: 600; font-size: 14px; line-height: 138.5%; text-align: center; letter-spacing: .025em; color: #08ba9c; box-shadow:5px 5px 20px rgb(0 0 0 / 5%), 5px 5px 15px rgb(0 0 0 / 10%);}
    .section01 {padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #939393}
    .section01 .name {font-weight: 700; font-size: 28px; line-height: 135.7%; letter-spacing: -.023em;}
    .section01 .para-wrap {display:flex; margin-top:20px; justify-content: space-between; align-items: center; font-size:16px; color: #333; transition: color 1s linear .1s; font-weight: 600; line-height: 150%; letter-spacing: .0056em;}
    .section01 > p {margin-top:20px; font-size: 16px; line-height: 150%; color: #939393;}
    .section01 .para-wrap ul {padding-left: 25px;}
    .section01 .para-wrap ul li {list-style-type:disc}
    .section01 .para-wrap ul li + li {margin-top:15px;}
    
    .section02 {display:flex;}
    .section02 .sub-tit {width:78px; color:#939393; font-size:16px;}
    .section02 .sub-cont {width:100%;}
    .section02 .career-item {padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #ccc}
    .section02 .career-item:last-child {padding-bottom:0px; margin-bottom:0px; border-bottom:0}
    .section02 .career-item .company-info {display:flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 16px; color:#939393;}
    .section02 .career-item .company-info .position {margin-top: 5px; font-weight:400; font-size: 14px;}
    .section02 .career-item .detail ul {margin-top:20px;}
    .section02 .career-item .detail li {display:flex; position:relative; padding-left: 19px; justify-content: space-between; align-items: center; color: #333; font-weight: 600; line-height: 150%; letter-spacing: .0056em;}
    .section02 .career-item .detail li:before {content: "·"; position: absolute; top: 1px; left: 0px; font-size: 55px; line-height: 14px;}
    .section02 .career-item .detail li .tit {margin-bottom:10px;}
    .section02 .career-item .detail li + li {margin-top:20px;}
    .section02 .career-item .detail li:last-child {color:#939393;}
    
    .btn-wrap {padding:50px 0 100px; background-color:#f8f8f8;}
    .btn-wrap > div {display:flex; justify-content:center;}
    .btn-wrap button {width:auto; height:54px; padding:12px 32px; font-weight: 600; font-size: 20px;}
    .btn-wrap button + button {margin-left:15px;}
`;

export default ResumeExample
