import {useEffect, useRef, useState} from "react"

import Header from "../../components/common/Header"
import Filter from "../../components/job/Filter"
import JobAdList from "../../components/job/JobAdList"
import ActiveCompany from "../../components/company/ActiveCompany"

import {ContainerStyled, DividerStyled} from "../../components/common/styled"

const JobListView = () => {
    // 모듈 선언

    // Global State 선언

    //Local State 선언
    const refFilter = useRef();
    const [isFilterFixed,setFilterFixed] = useState(false);

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
        if(refFilter.current) {
            const filter_h = refFilter.current.clientHeight;
            if (scrollY >= filter_h) {
                setFilterFixed(current => {
                    return true;
                });
            } else {		      
                setFilterFixed(current => {
                    return false;
                });
            }
        }
    }

    return (
        <>
        <Header />
        <ContainerStyled >
            <Filter isFilterFixed={isFilterFixed} ref={refFilter}/>
            
            <DividerStyled />

            <ActiveCompany isFilterFixed={isFilterFixed} />

            <JobAdList listType={"bookmark"}/>
        </ContainerStyled>
        {/* <Modal /> */}

        </>
    )
}

export default JobListView