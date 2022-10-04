import styled from "styled-components";
import { useRef, useState } from "react";

import {InnerStyled, ResumeInputItemStyled} from "../../components/common/styled";

const ResumeInputIntro = (props) => {
    // 유저 입력 값을 넣을 변수
    const [checkItemContent, setCheckItemContent] = useState('');

    const refTextarea = useRef();

    const checkItemChangeHandler = (event) => {
        //setTextareaHeight(event.target.value.split('\n').length - 1);
        const obj = refTextarea.current;
        obj.style.height ="auto";
        obj.style.height = obj.scrollHeight + 'px';
        setCheckItemContent(event.target.value);
        props.setResumeLenth((event.target.value.length) + 40);
    }
  return (
    <ResumeInputIntroStyled>
        <InnerStyled>
            <ResumeInputItemStyled>
                <div className="tit-wrap">
                    <p className="tit">간단소개글</p>
                </div>
                <div className="item-body">
                    <div className="input-guide">
                        <ul>
                            <li>• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.</li>
                            <li>• 3~5줄로 요약하여 작성하는 것을 추천합니다!</li>
                        </ul>
                    </div>
                    <div className="inp-wrap">
                        <div className="txtarea-wrap">
                            <textarea maxLength="4000" placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
                                type='text'
                                value={checkItemContent}
                                onChange={checkItemChangeHandler}
                                ref={refTextarea}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </ResumeInputItemStyled>
        </InnerStyled>
    </ResumeInputIntroStyled>
  )
}

const ResumeInputIntroStyled = styled.div`

`;

export default ResumeInputIntro