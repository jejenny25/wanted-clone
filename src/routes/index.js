
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainView from "../pages/main/MainView"

import JobMainView from "../pages/job/JobMainView"
import JobListView from "../pages/job/JobListView"
import JobAdDetailView from "../pages/job/JobAdDetailView"
import JobResultView from "../pages/job/JobResultView"
import CompanyView from "../pages/company/CompanyView"

import MyBookmarkView from "../pages/my/MyBookmarkView"
import MyLikeView from "../pages/my/MyLikeView"
import MyProfileView from "../pages/my/MyProfileView"

import ResumeIntroView from "../pages/resume/ResumeIntroView"
import ResumeView from "../pages/resume/ResumeView"
import ResumeInputView from "../pages/resume/ResumeInputView"

import KakaoRedirectHandler from '../components/common/KakaoRedirectHandler'

import Modal from "../components/common/Modal"

const RootRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* 기본 루트 페이지 */}
            <Route path='/' element={<MainView/>}/>

            <Route path='/jobMain' element={<JobMainView/>}/> {/* 채용메인 */}
            <Route path='/adList' element={<JobListView/>}/> {/* 채용공고 리스트 */}
            <Route path='/adDetail' element={<JobAdDetailView/>}/> {/* 채용공고 상세 */}
            <Route path='/schResult' element={<JobResultView/>}/> {/* 채용공고 상세 */}
            <Route path='/companyInfo' element={<CompanyView/>}/> {/* 회사정보 */} 

            <Route path='/myBookmark' element={<MyBookmarkView/>}/> {/* 내 북마크 리스트 */}
            <Route path='/myLike' element={<MyLikeView/>}/> {/* 내 좋아요 리스트 */}
            <Route path='/myProfile' element={<MyProfileView/>}/> {/* 내 프로필 */}

            <Route path='/resumeIntro' element={<ResumeIntroView/>}/> {/* 이력서 소개 페이지(로그인 전) */}
            <Route path='/resume' element={<ResumeView/>}/> {/* 이력서(로그인 후)  */}
            <Route path='/resumeInput' element={<ResumeInputView/>}/> {/* 이력서 입력페이지  */}

            <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
            
        </Routes>

        <Modal /> {/* 회원가입, 로그인 등 모달 */}

    </BrowserRouter>
  )
}

export default RootRoute
