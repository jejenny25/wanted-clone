import styled from "styled-components";

import {InnerStyled,BtnBigStyled} from "../../components/common/styled"

const ResumeWantedAI = () => {
    return (
        <ResumeWantedAIStyled>
            <InnerStyled>
                <div className="txt-wrap">
                    <h2 className="tit">
                        이력서 완성하면<br />
                        <p><span className="logo"><img src="images/logo-wantedai.png" alt="" /></span>가 포지션 추천까지</p>
                    </h2>
                    <p className="sub-txt">이력서를 분석하여 딱 맞는 포지션을 찾아드려요.<br />원티드AI가 추천한 포지션은 서류합격률 일반 지원 대비 4배 높습니다.</p>
                    <div className="btn-wrap">
                        <BtnBigStyled>지금 시작하기</BtnBigStyled>
                    </div>
                </div>
                <div className="img-wrap">
                    <img src="images/resume/resume_ai_sample.png" alt="" />
                </div>
            </InnerStyled>

        </ResumeWantedAIStyled>
    )
}

const ResumeWantedAIStyled = styled.div`
    position:relative;
    height: 452px;
    > div {display:flex; position:relative; height:100%; align-items:center;}
    .txt-wrap .tit {font-weight: 700; font-size: 36px; line-height: 130%; letter-spacing: -.024em;}
    .txt-wrap .tit p {display:flex; align-items:center;}
    .txt-wrap .logo {display:inline-block; width:198px; height:33px; margin-right:5px;}
    .txt-wrap .logo img{width:100%; position: relative; top: -14px;}
    .txt-wrap .sub-txt {font-weight: 400; font-size: 18px; line-height: 160%; margin-top: 20px;}
    .txt-wrap .btn-wrap {margin-top: 30px;}
    .txt-wrap .btn-wrap button {width:auto; height: 54px; padding: 0 27px; font-weight: 600; font-size: 20px; line-height: 150%; letter-spacing: .0056em;}
    .img-wrap{position: absolute; bottom: 0; left: 575px; }
    .img-wrap img {width: 516px; aspect-ratio: auto 516 / 352; height: 352px;}
`;

export default ResumeWantedAI
