import styled from "styled-components"

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import JopMainSlide from "../../components/job/JopMainSlide";
import SectionBanner from "../../components/job/SectionBanner";
import SectionAI from "../../components/job/SectionAI";
import SectionBanner2 from "../../components/job/SectionBanner2";
import SectionRecommend from "../../components/job/SectionRecommend";
import SectionShortCut from "../../components/job/SectionShortCut";
import SectionGrowth from "../../components/job/SectionGrowth";
import SectionSmall from "../../components/job/SectionSmall";
import SectionTheme from "../../components/job/SectionTheme";
import SectionPopular from "../../components/job/SectionPopular";

import {ContainerStyled, InnerStyled, DividerStyled3} from "../../components/common/styled"


const JobMainView = () => {
  return (
    <>    
        <Header />

        <JobMainViewStyled>
            
            <ContainerStyled>

                {/* 메인슬라이드 */}
                <JopMainSlide/>

                {/* 채용중인 포지션 보러가기 */}
                <SectionBanner/>

                {/* wanted ai 가 추천하는 포지션 */}
                <SectionAI />

                {/* 내 경력 한눈에 보기 */}
                <SectionBanner2/>

                {/* 바로 지원해볼까요? */}
                <SectionRecommend />

                {/* 내프로필/매치업 */}
                <SectionShortCut />

                {/* 급성장 중 회사 */}
                <SectionGrowth/>

                {/* 50인 이하 */}
                <SectionSmall/>

                {/* 테마로 모아보는 요즘 채용 */}
                <SectionTheme/>

                {/* 요즘뜨는 포지션 */}
                <SectionPopular />

            </ContainerStyled>
            
        </JobMainViewStyled>

        <Footer />
    </>
  )
}

const JobMainViewStyled = styled.div`
  padding-top: 25px;
`;

export default JobMainView