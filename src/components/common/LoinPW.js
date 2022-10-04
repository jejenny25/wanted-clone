import styled from "styled-components"
import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { chageLogin } from "../../store/reducers/loginInfo";
import { chageModal } from "../../store/reducers/modal";

import {InpGrpStyled, BtnBigStyled} from "../../components/common/styled"

const LoinPW = () => {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    const userID = window.localStorage.getItem('userID');
    const [password, setPassword] = useState("");
    const profilePic = "";
    const url = "https://dev.wanted-clone.site/api/users/sign-in";

    const goLogin = async() => {

        try{
            const getData = await axios({
                method:'post',
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{ 
                    email: userID,
                    password:password
                }
            })
            console.log(getData.data);
            if(getData.data.code === 1000){
                window.localStorage.setItem('userIdNo', getData.data.result.userId);
                window.localStorage.setItem('accessToken', getData.data.result.jwt);
                
                getUserInfo();
                // window.localStorage.setItem('isLogin', true);
                // window.localStorage.setItem('userNM', "채지은");
                // window.localStorage.setItem('profilePic', profilePic);
                // modalClose();
                // window.location.reload();
            }else if(getData.data.code === 3004){
                alert(getData.data.message);
            }
        }
        catch(err){
            console.log(err);
        }
    
    }

    const getUserInfo = async() => {
        const userNo = window.localStorage.getItem('userIdNo');
        const jwt = window.localStorage.getItem('accessToken');
        const url_info =`https://dev.wanted-clone.site/api/users/${userNo}`;
        try{
            const getData = await axios({
                method:'get',
                url: url_info,
                headers: {
                    'x-access-token': jwt
                }
            })
            console.log(getData.data);
            if(getData.data.code === 1000){
                window.localStorage.setItem('isLogin', true);
                window.localStorage.setItem('userNM', getData.data.result.name);
                window.localStorage.setItem('profilePic', getData.data.result.userImage);
                window.localStorage.setItem('contact', getData.data.result.contact);
                
                modalClose();
                window.location.reload();
            }
        }
        catch(err){
            console.log(err);
        }
    }

    const modalClose = () => {
        dispatch(chageModal( {active: false, modalType: 'login' } ));
    }
    
    return (
    <LoinPWStyled>
        <InpGrpStyled>
            <div className="inp-wrap">
                <label htmlFor="pw2" className="label-txt">비밀번호</label>
                <div className="inp-item">
                    <input type="password" className="inp-txt" id="pw2" placeholder="비밀번호" onChange={(e) => {setPassword(e.target.value);}} onKeyPress={(e) => {if(e.key === 'Enter') goLogin();}}/>
                </div>
            </div>
        </InpGrpStyled>
        <div className="btn-wrap">
            <BtnBigStyled onClick={goLogin}><span className="txt">로그인</span></BtnBigStyled>
            <button type="button" className="btn btn-link"><span className="txt">비밀번호 초기화/변경</span></button>
        </div>
    </LoinPWStyled>
    )
}

const LoinPWStyled = styled.div`
    .btn-wrap {margin-top:30px;}
    .btn-wrap .btn-link {display: flex; justify-content: center; align-items: center; width: 100%; height: 54px; border: 0; border-radius: 27px; font-size: 14px; font-weight: 600; color:#36f;}
`;

export default LoinPW