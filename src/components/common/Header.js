import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { chageModal } from "../../store/reducers/modal";
import { changeSearch } from "../../store/reducers/searchInfo";

import AllJobgroup from "../../components/common/AllJobgroup";
import SearchBar from "../../components/common/SearchBar";

import styled from "styled-components"
import {InnerStyled} from "./styled"

import { ReactComponent as IcoNew } from "../../assets/svg/ico-new.svg";
import { ReactComponent as IcoBeta } from "../../assets/svg/ico-beta.svg";
import { ReactComponent as IcoSch } from "../../assets/svg/ico-sch.svg";
import { ReactComponent as IcoBell } from "../../assets/svg/ico-bell.svg";

const { Kakao } = window;

function Header() {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();
    
     // store에 접근하여 state 가져오기
    //const isLogin = useSelector(state => state.loginInfo.isLogin);
    const isLogin = window.localStorage.getItem('isLogin') === "true";
    const profilePic = window.localStorage.getItem('profilePic');
    const selectedNav = window.localStorage.getItem('selectedNav');
    //console.log("isLogin : "+ isLogin);

    // 변수
    const navigate = useNavigate();
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const openLogin = () => {
        // store에 있는 state 바꾸는 함수 실행
        dispatch(chageModal( {active: true, modalType: 'login' } ));
    }

    const openMyMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    const openShcBar = () => {
        dispatch(changeSearch( {_isOpen: true, _schWord: '' } ));
    }


    const goLogout = () => {
        //navigate('/adList');
        navigate('/');
        window.localStorage.setItem('isLogin', false);
        window.localStorage.removeItem('userNM');
        window.localStorage.removeItem('profilePic');
        window.localStorage.removeItem('userID');
        window.localStorage.removeItem('userIdNo');
        window.localStorage.removeItem('accessToken');

        alert('로그아웃 되었습니다.');
        if (Kakao.Auth.getAccessToken()) {
            console.log(
                '카카오 인증 액세스 토큰이 존재합니다.',
                Kakao.Auth.getAccessToken(),
            );
            Kakao.Auth.logout(() => {
                alert('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
                console.log('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
                // dispatch(chageLogin( 
                //     {
                //         _isLogin: false, 
                //         _userNM: "", 
                //         _userID: "", 
                //         _profilePic: ""
                //     } 
                // ));
            });
        }
    };

    return (
    <HeaderStyled active={isActiveMenu}>
        <InnerStyled >
            <header className="header">
                <div className="all-jobgroup-wrap">
                    <AllJobgroup/>
                    
                    <Link to="/" className="logo"><div className="icon-logo"></div></Link>
                </div>

                <div className="nav-wrap">
                    <div className="nav-list" id="navList">
                        <div className={`item`}><Link to="/jobMain">채용</Link></div>
                        <div className={`item`}><Link to="#">이벤트</Link></div>
                        <div className={`item`}><Link to="#">직군별 연봉</Link></div>
                        <div className={`item`}><Link to={`${isLogin ? '/resume' : '/resumeIntro'}`}>이력서</Link></div>
                        <div className={`item`}><Link to="#">커뮤니티<em className="ico"><IcoNew /></em></Link></div>
                        <div className={`item`}><Link to="#">프리랜서</Link></div>
                        <div className={`item`}><Link to="#">AI 합격예측<em className="ico"><IcoBeta /></em></Link></div>
                    </div>
                </div>

                <aside>
                    <ul className="aside-btn-wrap">
                        <li><button type="button" className="btn btn-sch" onClick={openShcBar}><IcoSch /></button></li>
                        {isLogin?
                            <li>
                                <button type="button" className="btn btn-notify"><IcoBell /></button>
                                <div className="my-menu-area">
                                    <button type="button" className="btn btn-my" onClick={openMyMenu}><div className="img">
                                            {profilePic === "" || profilePic === null? 
                                                <img src="images/profile_default.png" alt="" />
                                                :
                                                <img src={profilePic} alt="" />
                                            }
                                    </div></button>
                                    <div className="my-menu-wrap">
                                        <div className="my-menu">
                                            <ul className="menu-list">
                                                <li>
                                                    <Link to="#"><span>MY 원티드</span></Link>
                                                </li>
                                                <li className="has-line">
                                                    <Link to="/myProfile"><span>프로필</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><span>지원현황</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><span>제안받기 현황</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="/myLike"><span>좋아요</span></Link>
                                                </li>
                                                <li className="has-line">
                                                    <Link to="/myBookmark"><span>북마크</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><span>추천</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><span>포인트</span></Link>
                                                </li>
                                                <li className="is-logout">
                                                    <Link to="#" onClick={goLogout}><span>로그아웃</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="arr"></div>
                                    </div>
                                </div>
                            </li>
                            :
                            <li><button type="button" className="btn btn-join" onClick={openLogin}><span>회원가입/로그인</span></button></li>
                        }
                        <li><button type="button" className="btn btn-company"><span>기업서비스</span></button></li>
                    </ul>
                </aside>
            </header>

        </InnerStyled>
        <SearchBar /> {/* 검색바 */}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.1);
    background-color:#fff;
    z-index:200;
    .header {display:flex; height:50px; align-items:center; justify-content:space-between;}
    .all-jobgroup-wrap {position:relative; top:-2px; display:flex;}
    .all-jobgroup-wrap .logo {font-size:17px}

    .nav-list {display:flex}
    .nav-list a {position:relative; padding:17px 15px; font-size:14px; font-weight:600;}
    .nav-list .item.active a {box-shadow:inset 0 -2px #258bf7;}
    .nav-list a:hover {box-shadow:inset 0 -2px #ddd;}
    .nav-list .ico {position:absolute; top:8px; right:-5px;}

    .aside-btn-wrap {display:flex; align-items:center;}
    .aside-btn-wrap > li {display:flex;  align-items:center;}
    .aside-btn-wrap > li:last-child:before {display:inline-block; width:1px; height:10px; margin:0 5px 0 25px; background-color:#e1e2e3; content:'';}
    .aside-btn-wrap .btn {padding:0 10px;}
    .aside-btn-wrap .btn-join {font-weight:600}
    .aside-btn-wrap .btn-company {margin-left:15px; border:1px solid #e1e2e3; border-radius:15px; color:#666; line-height:28px; font-size:13px;}
    .aside-btn-wrap .btn-notify {margin-right:10px;}
    .aside-btn-wrap .btn-my {width: 32px; height: 32px; padding:0; border-radius: 50%; border: 1px solid #e1e2e3; background-color: #fff; overflow:hidden;}
    .aside-btn-wrap .btn-my img {width:100%;}
    
    .my-menu-area {position:relative;} 
    .my-menu-wrap {position: absolute; display:${props=>props.active?'block':'none'}; top: 100%; right: -38px; margin-top: 13px; transform: translate(50%,8px);}
    .my-menu-wrap .arr {position: absolute; right: 50%; bottom: 100%; height: 11px; overflow: hidden; margin-bottom: -1px; transform: translateX(-47px);}
    .my-menu-wrap .arr:after {content: ""; margin-top: 4px; border: 1px solid #cdcdcd; background-color: #fff; height: 14px; width: 14px; display: block; border-top-right-radius: 30%; transform: rotate(-55deg) skewX(-20deg);}
    .my-menu {overflow: hidden; min-width: 194px; border-radius: 10px; box-shadow: 1px 2px 10px 0 rgba(0,0,0,.3); border: 1px solid #cdcdcd; background-color: #fff;}
    .my-menu .menu-list {padding-top:14px;}
    .my-menu .menu-list li {height:34px;}
    .my-menu .menu-list li a {display:flex; position:relative; width:100%; align-items:center; justify-content:center; font-weight: 500;padding: 8px;}    
    .my-menu .menu-list li a:hover:before {position: absolute; content: ""; display: block; top: 0; right: 0; left: 0; bottom: 0; border-radius: 8px; background-color: #f7f7f7; margin: 0 8px; height: 34px; z-index: 0;}
    .my-menu .menu-list li a span {position:relative;}
    .my-menu .menu-list li.has-line:after {content: ""; display: block; margin: 9px 7px; height: 1px; background-color: #ececec;}
    .my-menu .menu-list li.has-line + li {margin-top:18px;}
    .my-menu .menu-list li.is-logout {height: 50px; color: #333; margin-top: 9px; background-color: #f7f7f7;  border-radius: 0 0 10px 10px; border-top: 1px solid #ececec;}
    .my-menu .menu-list li.is-logout a {height: 50px;}
    
`;

// const NavItem = styled.div`
//     a {position:relative; padding:17px 15px; font-size:14px; font-weight:600; box-shadow:${props=>props.active?'inset 0 -2px #ddd':'none'};}
//     a:hover {box-shadow:inset 0 -2px #ddd;}
//     a .ico {position:absolute; top:8px; right:-5px;}
// `;

export default Header