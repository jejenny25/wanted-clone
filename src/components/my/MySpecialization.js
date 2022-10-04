import { useState } from "react";
import styled from "styled-components"

import {MyinfoInputBoxStyled, StaticFromStyled,MyInputItem} from "../common/styled";


const MySpecialization = () => {
    const [interesting, setInteresting] = useState(false);

    const changeInteresting = (e) => {
        if(e.target.value === "NO"){
            setInteresting(false);
        }
        else{
            setInteresting(true);
        }
    }
    return (
        <MyinfoInputBoxStyled>
            <MySpecializationStyled>
                <div className="tit-wrap">
                    <h4 className="tit">전문분야 설정</h4>
                </div>
                <div className="static-form-wrap">
                    <StaticFromStyled>
                        <p className="static-label">직군</p>
                        <ul className="static-detail">
                            <li>개발</li>
                        </ul>
                    </StaticFromStyled>

                    <StaticFromStyled>
                        <p className="static-label">직무</p>
                        <ul className="static-detail">
                            <li>프론트엔드 개발자</li>
                        </ul>
                    </StaticFromStyled>

                    <StaticFromStyled>
                        <p className="static-label">경력</p>
                        <ul className="static-detail">
                            <li>신입</li>
                        </ul>
                    </StaticFromStyled>
                </div>
                <div className="form-wrap">
                    <MyInputItem>
                        <label htmlFor="" className="inp-label">추천인 선택</label>
                        <div className="input-wrap">
                            <button type="button" className="btn btn-slect">선택하기<i className="icon-arrow_right"></i></button>
                        </div>
                    </MyInputItem>
                    <MyInputItem>
                        <label htmlFor="" className="inp-label">제외기업 설정</label>
                        <div className="input-wrap">
                            <button type="button" className="btn btn-slect">선택하기<i className="icon-arrow_right"></i></button>
                        </div>
                    </MyInputItem>

                    <MyInputItem interesting={interesting}>
                        <label htmlFor="" className="inp-label">구직여부 설정</label>
                        <div className="input-wrap">
                            <div className="input-grp">
                                <div className="sel-wrap">
                                    <select name="" id="" className="inp-sel-sm" onChange={changeInteresting}>
                                        <option value="NOW">현재 구직 중</option>
                                        <option value="INTEREST">관심 있음</option>
                                        <option value="NO">전혀 관심 없음</option>
                                    </select>
                                </div>
                                <div className="open-yn">
                                    {interesting?"이력서 공개":"이력서 비공개"}
                                </div>
                            </div>
                            <p className="explation">
                                {interesting?"기업으로부터 면접 제안을 받으실 수 있습니다.":"기업으로부터 면접 제안을 받지않게 됩니다."}
                            </p>
                        </div>
                    </MyInputItem>
                </div>
            </MySpecializationStyled>
        </MyinfoInputBoxStyled>
    )
}

const MySpecializationStyled = styled.div`
    /* padding: 0 30px 0 30px; */
    .tit-wrap {padding: 0 30px 0 30px;}
    .tit-wrap .tit {font-size: 20px;font-weight: 600;}
    .static-form-wrap{margin-top:36px}
    .static-form-wrap > div + div {margin-top:24px;}
    .form-wrap {border-top: 5px solid #f8f8fa; margin-top:43px; padding: 18px 30px 15px 30px;}
`;

export default MySpecialization