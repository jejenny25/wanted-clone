import styled from "styled-components";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

import { ReactComponent as IcoArr4 } from "../../assets/svg/ico-arr4.svg";

const ResumeInputCareer = () => {
  return (
    <ResumeInputCareerStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">경력</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요. </li>
                            <li>• 신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요. </li>
                            <li>• 업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요. </li>
                            <li>• 업무 성과는 되도록 구체적인 숫자 혹은 [%]로 표현해주세요!</li>
                            <li>• 경력 조회 후 기업명이 실제와 다른 경우, 부서명/직책 란에 원하시는 기업명을 작성해주세요.</li>
                        </ul>
                    </div>
                    <button type="button" className="btn-banner">
                        <p className="left-txt">내 경력 정보를 한 번에 불러올까요? 기억 안 나는 경력 정보, 알아서 채워드려요!</p>
                        <p className="right-txt">내 경력 한눈에 모아보기<IcoArr4 /></p>
                    </button>
                    <div className="btn-add-wrap">
                        <button type="button" className="btn-add">+ 추가</button>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputCareerStyled>
  )
}

const ResumeInputCareerStyled = styled.div`

`;

export default ResumeInputCareer