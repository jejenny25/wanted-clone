import styled from "styled-components"

import Header from "../../components/common/Header"
import JobAdList from "../../components/job/JobAdList"

import {InnerStyled, ContainerStyled, PageTit} from "../../components/common/styled"

const MyBookmarkView = () => {
    return (
        <>    
            <Header />

            <MybookmarkStyled>
                <InnerStyled>
                    <ContainerStyled>
                        <PageTit>
                            <h3 className="tit">북마크</h3>
                        </PageTit>

                        <JobAdList listType={"bookmark"}/>
                    </ContainerStyled>
                </InnerStyled>
            </MybookmarkStyled>
        </>


    )
}

const MybookmarkStyled = styled.div`
    background-color: #f8f8f8;
`;

export default MyBookmarkView