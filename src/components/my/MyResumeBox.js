import styled from "styled-components"

import { MyinfoInputBoxStyled, BtnMidBorderBlueStyled, FontRedStyled } from "../common/styled";


const MyResumeBox = () => {
    return (
        <MyinfoInputBoxStyled boxtype={"small"}>
            <MyResumeBoxStyled>
                <div className="txt-wrap">
                    <p>이력서 글자 수 : <FontRedStyled>86자</FontRedStyled> / 최소 400자</p>
                    <p className="explain">글자 수가 400자 이상이면, 직접 제안받을 확률이 높아집니다.</p>
                </div>
                <BtnMidBorderBlueStyled><span>이력서 강화하기</span></BtnMidBorderBlueStyled>
            </MyResumeBoxStyled>
        </MyinfoInputBoxStyled>
    )
}

const MyResumeBoxStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .txt-wrap p {font-size: 16px;}
    .txt-wrap .explain {margin-top: 4px; font-size: 14px; line-height: 1.57; color: #999;}
    button {font-size:14px; font-weight:600}
`;

export default MyResumeBox