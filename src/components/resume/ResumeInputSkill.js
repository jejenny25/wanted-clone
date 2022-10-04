import styled from "styled-components";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

const ResumeInputSkill = () => {
  return (
    <ResumeInputSkillStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">스킬</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.</li>
                            <li>• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.</li>
                            <li>• 스킬을 등록한 원티드 이력서는 일반 이력서에 비해 서류통과율이 더 높습니다!</li>
                        </ul>
                    </div>
                    <div className="btn-add-wrap">
                        <button type="button" className="btn-add">+ 추가</button>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputSkillStyled>
  )
}

const ResumeInputSkillStyled = styled.div`

`;

export default ResumeInputSkill