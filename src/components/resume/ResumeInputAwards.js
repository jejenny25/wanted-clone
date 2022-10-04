import styled from "styled-components";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

const ResumeInputAwards = () => {
  return (
    <ResumeInputAwardsStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">수상 및 기타</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 수상 이력, 직무 관련 자격증, 수료한 교육이나 참석한 외부활동 등이 있다면 간략히 작성해주세요.</li>
                            <li>• 지원하는 회사에서 요구하는 경우가 아니라면 운전면허증과 같은 자격증은 생략하는 것이 좋습니다!</li>
                        </ul>
                    </div>
                    <div className="btn-add-wrap">
                        <button type="button" className="btn-add">+ 추가</button>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputAwardsStyled>
  )
}

const ResumeInputAwardsStyled = styled.div`

`;

export default ResumeInputAwards