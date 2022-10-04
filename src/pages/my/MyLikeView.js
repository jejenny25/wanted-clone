import styled from "styled-components"

import Header from "../../components/common/Header"
import JobAdList from "../../components/job/JobAdList"

import {InnerStyled, ContainerStyled, PageTit} from "../../components/common/styled"

const MyLikeView = () => {
    return (
        <>    
        <Header />

            <MyLikeStyled>
                <InnerStyled>
                    <ContainerStyled>
                        <PageTit>
                            <h3 className="tit">좋아요</h3>
                        </PageTit>

                        <JobAdList listType={"like"}/>
                    </ContainerStyled>
                </InnerStyled>
            </MyLikeStyled>
        </>


    )
}

const MyLikeStyled = styled.div`
    background-color: #f8f8f8;
    
`;

export default MyLikeView