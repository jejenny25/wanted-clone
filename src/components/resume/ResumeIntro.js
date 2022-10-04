import styled from "styled-components";

import {InnerStyled, BtnBigStyled, BtnBigBorderStyled} from "../../components/common/styled"

const ResumeIntro = () => {
    return (
        <ResumeIntroStyled>
            <InnerStyled>
                <div className="intro-wrap">
                    <div className="txt-wrap">
                        <h2 className="tit">합격을 부르는 이력서</h2>
                        <p className="sub-txt">원티드 이력서로 지원 시<br />일반 이력서보다 서류 합격률이 2배 높아집니다.</p>
                    </div>
                    <div className="btn-wrap">
                        <BtnBigBorderStyled>이력서 관리</BtnBigBorderStyled>
                        <BtnBigStyled>새 이력서 작성</BtnBigStyled>
                    </div>
                </div>
            </InnerStyled>

        </ResumeIntroStyled>
    )
}

const ResumeIntroStyled = styled.div`
    width: 100%;
    height: 442px;
    background-image: url(images/resume/intro_img.png);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .intro-wrap .txt-wrap {color:#fff; text-align:center;}
    .intro-wrap .tit {font-weight: 700; font-size: 56px; line-height: 128.6%; letter-spacing: -.027em;}
    .intro-wrap .sub-txt {margin-top:10px; font-weight: 400; font-size: 22px; line-height: 127.3%; letter-spacing: -.012em;}
    .btn-wrap {display:flex; margin-top:50px; align-items:center; justify-content:center;}
    .btn-wrap button {width:auto; padding:12px 32px; height:54px; font-size:20px;}
    .btn-wrap button + button {margin-left:10px;}
`;

export default ResumeIntro