import styled from "styled-components"
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../../store/reducers/searchInfo";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import SchWordView from "../../components/search/SchWordView";
import SchResult from "../../components/search/SchResult";

import {ContainerStyled} from "../../components/common/styled"

const JobResultView = () => {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    const _schWord = useSelector(state => state.searchInfo.schWord);

    useEffect(() => {
        return () => {
            //alert("Test");
            dispatch(changeSearch( {_isOpen: false, _schWord: "" } ));
        };
    }, []);

    return (
        <>    
        <Header />

        <JobResultViewStyled>
            
            <ContainerStyled>
                
                {/* 검색어 */}
                <SchWordView schWord={_schWord}/>

                { /* 검색결과 */}
                <SchResult />

            </ContainerStyled>
            
        </JobResultViewStyled>

        <Footer />
    </>
    )
}


const JobResultViewStyled = styled.div`
    background-color: #f8f8f8;

    .filter-btn-wrap {margin-top:35px; display:flex; align-items:center; justify-content:space-between;}
    .filter-btn-wrap .btn {display:inline-flex; height:40px; padding: 0 15px; border-radius:5px; border: 1px solid #ececec; position: relative; align-items:center; background-color:#fff;}
    .filter-btn-wrap .btn + .btn {margin-left:10px;}
    .filter-btn-wrap .btn .tit {display:inline-block; margin-right:15px;}
    .filter-btn-wrap .btn .txt {display:inline-block; font-weight:600; color:#36f;}
    .filter-btn-wrap .btn .ico {display:inline-block; margin-left:10px; transition:.3s;}
`;


export default JobResultView