import styled from "styled-components";

import Header from "../../components/common/Header";
import MyProfileBox from "../../components/my/MyProfileBox";
import MyBanner from "../../components/my/MyBanner";
import MyResumeBox from "../../components/my/MyResumeBox";
import MyDefaultResumeBox from "../../components/my/MyDefaultResumeBox";
import MySpecialization from "../../components/my/MySpecialization"

import {InnerStyled, ContainerStyled, PageTit, MyContWrapStyled} from "../../components/common/styled";

const MyProfileView = () => {
  return (
    <>
        <Header />
        <MyProfileViewStyled>
            <InnerStyled>
                <ContainerStyled>
                    <PageTit>
                        <h3 className="tit">프로필</h3>
                    </PageTit>

                    <MyContWrapStyled>
                        <div className="aside-wrap">
                            <MyProfileBox />
                        </div>

                        <div className="content-wrap">
                            <div className="my-banner-wrap">
                                <MyBanner/>
                            </div>

                            <div className="myinfo-box-wrap">
                                <MyResumeBox />
                                <MyDefaultResumeBox />
                                <MySpecialization />
                            </div>
                        </div>
                    </MyContWrapStyled>

                </ContainerStyled>
            </InnerStyled>

        </MyProfileViewStyled>
    
    </>
  )
}

const MyProfileViewStyled = styled.div`
    background-color:#f8f8f8;
    min-height: 100vh;
    .my-banner-wrap {width: 100%; height: 105px; border-radius: 3px; margin-bottom: 20px; background: linear-gradient(90deg,#ddebff -.28%,#b7d8ff);}
    .myinfo-box-wrap > div + div {margin-top:10px}
`

export default MyProfileView