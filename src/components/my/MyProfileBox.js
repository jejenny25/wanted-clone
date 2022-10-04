import {Link} from "react-router-dom"
import styled from "styled-components"

import {BtnMidBorderStyled} from "../../components/common/styled";

const MyProfileBox = () => {

    const userNM = window.localStorage.getItem('userNM');
    const userID = window.localStorage.getItem('userID');
    const profilePic = window.localStorage.getItem('profilePic');
    const phoneNo = window.localStorage.getItem('contact');
    
  return (
    <MyProfileBoxStyled>
        <div className="box-head">
            <div className="profile-pic">
                <div className="img">
                    {profilePic === "" || profilePic === null? 
                        <img src="images/profile_default.png" alt="" />
                        :
                        <img src={profilePic} alt="" />
                    }
                </div>
                {/* <input type="file" className="inp-file" accept="image/*" /> */}
                <i className="icon-camera_icon"></i>
            </div>

            <div className="txt-wrap">
                <p className="name">{userNM}</p>
                <p className="email">{userID}</p>
                <p className="phone-num">{phoneNo.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</p>
            </div>
            <div className="btn-wrap">
                <BtnMidBorderStyled><span>기본정보 수정</span></BtnMidBorderStyled>
            </div>
        </div>
        <div className="box-bottom">
            <ul className="my-match-list">
                <li>
                    <Link to="#">
                        <p className="tit">관심 있음</p>
                        <p className="num">0</p>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <p className="tit">열람</p>
                        <p className="num">0</p>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <p className="tit">받은 제안</p>
                        <p className="num">0</p>
                    </Link>
                </li>
            </ul>
        </div>
    </MyProfileBoxStyled>
  )
}

const MyProfileBoxStyled = styled.div`
    padding: 42px 20px 41px;
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    background-color: #fff;
    margin-bottom: 0;

    .profile-pic {display:block; position: relative; width: 77px; height: 77px; margin:auto;}
    .profile-pic .img {width: 77px; height: 77px; border-radius: 50%; overflow:hidden;}
    .profile-pic .img img {width:100%}
    .profile-pic .inp-file {position:absolute; top:0; left:0; width: 77px; height: 77px; opacity:0; }
    .profile-pic  .icon-camera_icon{position: absolute; right: -4px; bottom: 0; padding: 8px; font-size: 16px; color: #999; line-height: 1; border-radius: 50%; background-color: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);}

    .txt-wrap {margin-top: 31px;}
    .txt-wrap p {font-size: 14px; font-weight: 500; line-height: 1.07; color: #999; text-align:center;}
    .txt-wrap .name {font-size: 18px; font-weight: 600; color: #333;}
    .txt-wrap .email {margin-top:20px;}
    .txt-wrap .phone-num {margin-top:10px;}
    
    .btn-wrap {margin-top:30px;}
    .btn-wrap button {margin:auto; width:160px;}

    .box-bottom {margin-top:40px;}
    .box-bottom .my-match-list li + li {margin-top:23px;}
    .box-bottom .my-match-list li a {display:flex; justify-content:space-between; align-items:center;font-size: 16px; font-weight: 400; line-height: 1.06;}
    
`;

export default MyProfileBox
