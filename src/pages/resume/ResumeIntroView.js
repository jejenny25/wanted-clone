import styled from "styled-components";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import ResumeIntro from "../../components/resume/ResumeIntro";
import ResumeAdvantage from "../../components/resume/ResumeAdvantage";
import ResumeExample from "../../components/resume/ResumeExample";
import ResumeWantedAI from "../../components/resume/ResumeWantedAI";

import {ContainerNopadbotStyled} from "../../components/common/styled"

const ResumeIntroView = () => {
    return (
    <>
        <Header />

            <ContainerNopadbotStyled>

                {/* 인트로 */}
                <ResumeIntro />

                {/* 장점 */}
                <ResumeAdvantage /> 

                {/* 예시 */}
                <ResumeExample />

                {/* wanted ai */}
                <ResumeWantedAI />

            </ContainerNopadbotStyled>

        <Footer />
    </>
    )
}

export default ResumeIntroView