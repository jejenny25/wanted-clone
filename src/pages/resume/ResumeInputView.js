import { useState } from "react";
import styled from "styled-components";

import Header from "../../components/common/Header";
import ResumeTooltip from "../../components/resume/ResumeTooltip";
import ResumeInputBasicInfo from "../../components/resume/ResumeInputBasicInfo";
import ResumeToolbar from "../../components/resume/ResumeToolbar";
import ResumeInputIntro from "../../components/resume/ResumeInputIntro";
import ResumeInputCareer from "../../components/resume/ResumeInputCareer";
import ResumeInputEdu from "../../components/resume/ResumeInputEdu";
import ResumeInputSkill from "../../components/resume/ResumeInputSkill";
import ResumeInputAwards from "../../components/resume/ResumeInputAwards";
import ResumeInputLang from "../../components/resume/ResumeInputLang";
import ResumeInputLink from "../../components/resume/ResumeInputLink";

import {ContainerStyled} from "../../components/common/styled"

const ResumeInputView = () => {

    const [resumeLenght, setResumeLenth ] = useState(40);
    //console.log("resumeLenght : " + resumeLenght);

    return (
    <>
        <Header />

        <ContainerStyled>
            <ResumeInputViewStyled>

                {/* 맨위 팁들 */}
                <ResumeTooltip />
                
                {/* 기본 정보 */}
                <ResumeInputBasicInfo />

                {/* 간단소개글 */}
                <ResumeInputIntro setResumeLenth={setResumeLenth} />

                {/* 경력 */}
                <ResumeInputCareer />

                {/* 학력 */}
                <ResumeInputEdu />

                {/* 스킬 */}
                <ResumeInputSkill />
                
                {/* 수상 및 기타 */}
                <ResumeInputAwards />

                {/* 외국어 */}
                <ResumeInputLang />

                {/* 링크 */}
                <ResumeInputLink />

                {/* 아래 툴바 */}
                <ResumeToolbar resumeLenght={resumeLenght}/>

            </ResumeInputViewStyled>

        </ContainerStyled>

    </>
    )
}

const ResumeInputViewStyled = styled.div`
    .inp{width:100%; font-size:16px;}
    .inp::placeholder{color:#999;}
`;

export default ResumeInputView
