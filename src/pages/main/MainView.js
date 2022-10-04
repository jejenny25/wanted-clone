import styled from "styled-components";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MainPictureSlide from "../../components/main/MainPictureSlide";
import SectionInsight from "../../components/main/SectionInsight";
import SectionBanner from "../../components/main/SectionBanner";
import SectionArticle from "../../components/main/SectionArticle";
import SectionVod from "../../components/main/SectionVod";
import SectionBanner2 from "../../components/main/SectionBanner2";
import SectionEvent from "../../components/main/SectionEvent";
import SectionBanner3 from "../../components/main/SectionBanner3";
import SectionBtnBanner from "../../components/main/SectionBtnBanner";

import {ContainerStyled, InnerStyled, DividerStyled3} from "../../components/common/styled"

const MainView = () => {
  return (
    <>    
        <Header />

        <MainStyled>
            
            <ContainerStyled>

                {/* 메인슬라이드 */}
                <MainPictureSlide/>

                {/* 나에게 필요한 커리어 인사이트 */}
                <SectionInsight />

                 {/* 배너 */}
                <SectionBanner />

                {/* 아티클 */}
                <SectionArticle />

                <InnerStyled><DividerStyled3 /></InnerStyled>

                {/* VOD */}
                <SectionVod />

                {/* 배너 */}
                <SectionBanner2 />

                {/* 이벤트 */}
                <SectionEvent />

                {/* wanted 구독배너 */}
                <SectionBanner3 />

                {/* 채용정보를 찾고계셨나요? */}
                <SectionBtnBanner />

            </ContainerStyled>
            
        </MainStyled>

        <Footer />
    </>
  )
}

const MainStyled = styled.div`
    padding-top:25px;
`;

export default MainView