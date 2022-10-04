import styled from "styled-components"

import {MyinfoInputBoxStyled, StaticFromStyled} from "../common/styled";


const MyDefaultResumeBox = () => {
    return (
        <MyinfoInputBoxStyled>
            <MyDefaultResumeBoxStyled>
                <div className="tit-wrap">
                    <h4 className="tit">기본 이력서 설정</h4>
                </div>
                <div className="static-form-wrap">
                    <StaticFromStyled>
                        <p className="static-label">기본 이력서 선택</p>
                        <button type="button" className="btn btn-resume-select">
                            <span className="lang">한</span>
                            <p className="tit">채지은 1</p>
                        </button>
                    </StaticFromStyled>

                    <StaticFromStyled>
                        <p className="static-label">학교</p>
                        <ul className="static-detail">
                            <li>한국대학교</li>
                            <li>영어영문과</li>
                        </ul>
                    </StaticFromStyled>

                    <StaticFromStyled>
                        <p className="static-label">직장</p>
                        <ul className="static-detail">
                            <li>abc 컴패니</li>
                            <li>주임</li>
                        </ul>
                    </StaticFromStyled>

                    <p className="intro">안녕하세요. 신입 프론트엔드 개발자입니다.</p>
                </div>

            </MyDefaultResumeBoxStyled>
        </MyinfoInputBoxStyled>
    )
}

const MyDefaultResumeBoxStyled = styled.div`
    /* padding: 0 30px 0 30px; */
    .tit-wrap {padding: 0 30px 0 30px;}
    .tit-wrap .tit {font-size: 20px;font-weight: 600;}
    .static-form-wrap{margin-top:36px}
    .static-form-wrap > div + div {margin-top:24px;}
    .btn-resume-select {position: relative; width: 100%; height: 50px; padding-right: 20px; padding-left: 20px; border-radius: 3px; border: 1px solid #e1e2e3; margin-top: 9px; text-align: left; display: flex; align-items: center;}
    .btn-resume-select .lang {width: 20px; height: 20px; margin-right:10px; border-radius: 2px; border: 1px solid #999; font-size: 11px; font-weight: 400; font-stretch: normal; font-style: normal; line-height: 20px; letter-spacing: normal; color: #999; text-align: center; }
    .btn-resume-select:after {content: ""; top: 50%; right: 20px; position: absolute; transform: translateY(-50%); border-top: 6px solid #999; border-left: 4px solid transparent; border-right: 4px solid transparent; }
    .intro {overflow: hidden; max-height: 66px; margin-top: 28px; padding: 0 30px 0 30px; font-size: 14px; line-height: 1.57; color: #999; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; max-height: inherit;}
`;

export default MyDefaultResumeBox