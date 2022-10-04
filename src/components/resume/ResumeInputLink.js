import styled from "styled-components";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

const ResumeInputLink = () => {
  return (
    <ResumeInputLinkStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">링크</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요.</li>
                        </ul>
                    </div>
                    <div className="btn-add-wrap">
                        <button type="button" className="btn-add">+ 추가</button>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputLinkStyled>
  )
}

const ResumeInputLinkStyled = styled.div`

`;

export default ResumeInputLink