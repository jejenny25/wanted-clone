import styled from "styled-components";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

const ResumeInputLang = () => {
  return (
    <ResumeInputLangStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">외국어</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 외국어 자격증을 보유한 경우 작성해주세요. </li>
                            <li>• 활용 가능한 외국어가 있다면, 어느정도 수준인지 레벨을 선택해주세요.</li>
                        </ul>
                    </div>
                    <div className="btn-add-wrap">
                        <button type="button" className="btn-add">+ 추가</button>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputLangStyled>
  )
}

const ResumeInputLangStyled = styled.div`

`;

export default ResumeInputLang