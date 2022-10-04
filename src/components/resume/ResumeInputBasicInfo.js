import styled from "styled-components";

import { Link } from "react-router-dom"

import {InnerStyled} from "../../components/common/styled";

const ResumeInputBasicInfo = () => {
  return (
    <ResumeInputBasicInfoStyled>
        <InnerStyled>
            <div className="tit-wrap">
                <input type="text" className="inp inp-tit" maxLength="100" placeholder="이력서 제목(필수)" defaultValue="채지은 4"/>
            </div>
            <div className="basic-info">
                <div className="inp-wrap">
                    <input className="inp inp-name" type="text" maxLength="100" placeholder="이름(필수)" defaultValue="채지은" />
                </div>
                <div className="inp-wrap">
                    <input className="inp inp-email" type="text" maxLength="100" placeholder="이메일(필수)" defaultValue="qwerty@google.com" />
                </div>
                <div className="inp-wrap">
                    <input className="inp inp-name" type="tel" maxLength="100" placeholder="연락처(필수) ex) 010-0000-0000" defaultValue="+8201012348979" />
                </div>
            </div>
        </InnerStyled>
    </ResumeInputBasicInfoStyled>
  )
}

const ResumeInputBasicInfoStyled = styled.div`
    padding-top:130px;
    margin-bottom: 60px;
    .tit-wrap {margin-bottom:50px;}
    
    .tit-wrap .inp-tit {color: #3b3d40; font-size: 36px; line-height: 36px; font-weight: 500; }
    .basic-info .inp-wrap {margin-top:20px;}
    
`;

export default ResumeInputBasicInfo
