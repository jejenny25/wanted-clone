import styled from "styled-components";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

const ResumeInputEdu = () => {
  return (
    <ResumeInputEduStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">학력</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 최신순으로 작성해주세요.</li>
                        </ul>
                    </div>
                    <div className="btn-add-wrap">
                        <button type="button" className="btn-add">+ 추가</button>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputEduStyled>
  )
}

const ResumeInputEduStyled = styled.div`

`;

export default ResumeInputEdu