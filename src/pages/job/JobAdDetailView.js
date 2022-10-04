import styled from "styled-components"

import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"
import PicturesSlide from "../../components/job/PicturesSlide"
import ApplyBtnBox from "../../components/job/ApplyBtnBox"
import JobAdDescription from "../../components/job/JobAdDescription"
import JobPlace from "../../components/job/JobPlace"
import CompanyNameCard from "../../components/company/CompanyNameCard"
import WarningBox from "../../components/job/WarningBox"
import JobAdList from "../../components/job/JobAdList"
import Modal from "../../components/common/Modal"

import {useEffect, useRef, useState} from "react"
import {InnerStyled, ContainerStyled, DividerStyled2} from "../../components/common/styled"

const JobAdDetailView = () => {
    // 모듈 선언

    // Global State 선언

    //Local State 선언
    const refJobPlace = useRef();
    const [isScrollBot,setScrollBot] = useState(false);

    //Life Cycle 선언
    // 스크롤 관련
    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록;
        return () => {
            window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
        };
    }, []);

    //함수 선언
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if(refJobPlace.current) {
            const jobplace_offset = refJobPlace.current.offsetTop;
            if (scrollY >= jobplace_offset) {
                setScrollBot(current => {
                    return true;
                });
            } else {		      
                setScrollBot(current => {
                    return false;
                });
            }
        }
    }

    return (
        <>
            <Header />


            <JobDetailWrapStyled>
                <InnerStyled>
                    <ContainerStyled>
                        <div className="job-details-wrap">
                            <div className="job-info-wrap">
                                <PicturesSlide />

                                <JobAdDescription />

                                <DividerStyled2 />

                                <JobPlace ref={refJobPlace}/>

                                <CompanyNameCard />

                                <WarningBox />
                            </div>

                            <ApplyBtnBox isScrollBot={isScrollBot}/>
                        </div>
                        
                        <div className="recommend-wrap">
                            <div className="tit-wrap">
                                <h3 className="tit">채지은님, 이 포지션을 찾고 계셨나요?</h3>
                            </div>

                            <JobAdList listType={"bookmark"}/>
                        </div>

                    </ContainerStyled>
                </InnerStyled>
            </JobDetailWrapStyled>

            {/* <Modal /> */}

            <Footer />

        </>
    )
}

const JobDetailWrapStyled = styled.div`
    position: relative;
    padding-top:20px;
    .job-details-wrap {position:relative;}
    .job-info-wrap {width:calc(100% - 360px)}

    .recommend-wrap {margin-top:80px;}
    .recommend-wrap .tit-wrap {margin-bottom:20px;}
    .recommend-wrap .tit-wrap .tit {font-size:20px; font-weight:600;}
`;
export default JobAdDetailView