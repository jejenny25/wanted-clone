import styled from "styled-components";

import {Link} from "react-router-dom"

import Header from "../../components/common/Header";
import ResumeList from "../../components/resume/ResumeList";

import {InnerStyled, ContainerNopadbotStyled} from "../../components/common/styled"

const ResumeView = () => {
    return (
    <>
        <Header />
            <ResumeStyled>
                <ContainerNopadbotStyled>
                    <InnerStyled>
                        <div className="tit-wrap">
                            <p className="tit">최근 문서</p>

                            <Link to="/resumeIntro">원티드 이력서 소개<i className="icon-info_icon"></i></Link>
                        </div>

                        <ResumeList />
                    </InnerStyled>

                </ContainerNopadbotStyled>

            </ResumeStyled>
    </>
    )
}

const ResumeStyled = styled.div`
    background-color:#f8f8f8;
    min-height: 100vh;

    .tit-wrap{display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end; margin-top: 25px; margin-bottom: 5px;}
    .tit-wrap .tit {font-size: 16px; font-weight: 600; line-height: 1.4; margin: 0; padding: 15px 0; color: #333;}
    .tit-wrap a {font-size: 16px; font-weight: 600; margin: 0; padding: 15px 0; color: #36f; display: flex; align-items: center;}
    .tit-wrap a .icon-info_icon {margin-left: 8px; position: relative; bottom: 1px;}
    
`;

export default ResumeView