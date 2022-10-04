import { useState } from "react";
import axios from 'axios';
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux';
import { chageLogin } from "../../store/reducers/loginInfo";
import { chageModal } from "../../store/reducers/modal";

import KakaoLogin from "../../components/common/KakaoLogin"
import {InpGrpStyled, BtnBigStyled, ErrTxt} from "../../components/common/styled"

import { ReactComponent as IcoMail } from "../../assets/svg/ico-mail.svg";

import { ReactComponent as IcoFacebook } from "../../assets/svg/ico-facebook.svg";
import { ReactComponent as IcoGoogle } from "../../assets/svg/ico-google.svg";
import { ReactComponent as IcoApple } from "../../assets/svg/ico-apple.svg";


const Login = () => {
    // 모듈 선언

    // Global State 선언

    // local 
    const [_email, setEmail ] = useState("");
    const [eamilMsg, setEmailMsg ] = useState("");
    const [isEmail, setIsEmail ] = useState(true);
    const url =`https://dev.wanted-clone.site/api/users?email=${_email}`;

    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    const emailChk = () =>{
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        if (!emailRegex.test(_email)) {
                setEmailMsg('올바른 이메일 형식을 입력해주세요.');
                setIsEmail(false);
            } else {
                setIsEmail(true);
                goCheckJoin();
        }
    }

    const goCheckJoin = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url,
            })
            console.log(getData.data.code); 
            if(getData.data.code === 1001)
            {
                window.localStorage.setItem('userID', _email);
                dispatch(chageModal( {active: true, modalType: 'join' } ));
            }else if(getData.data.code === 1002){// 회원일 경우
                dispatch(chageModal( {active: true, modalType: 'pw' } ));
                window.localStorage.setItem('userID', _email);
            }
            //setSigunguList(getData.data.response.body.items.item);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <LoginStyled>
            <div className="tit-wrap">
                <h2 className="login-tit">직장인을 위한<br />커리어 플랫폼, 원티드!</h2>
                <p className="sub-tit">커리어 성장과 행복을 위한 여정<br/>지금 원티드에서 시작하세요.</p>
            </div>
            <InpGrpStyled>
                <div className="inp-wrap">
                    <label htmlFor="id" className="label-txt">이메일</label>
                    <div className="inp-item">
                        <input type="text" className={`inp-txt ${isEmail ? "" : "has-err"}`} id="id" placeholder="이메일을 입력해주세요." value={_email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {isEmail ? "" : <ErrTxt>{eamilMsg}</ErrTxt>}
                </div>
            </InpGrpStyled>
            <div className="btn-wrap">
                <BtnBigStyled onClick={emailChk}><span className="ico-mail"><IcoMail /></span> <span className="txt">이메일로 계속하기</span></BtnBigStyled>
            </div>
            <div className="other-login-wrap">
                <p className="or-txt">or</p>
                <p className="tit">다음 계정으로 계속하기</p>
                <div className="sns-login-wrap">
                    <ul className="sns-login-list">
                        <li>
                            <KakaoLogin />
                        </li>
                        <li>
                            <button type="button" className="btn btn-sns-login facebook"><IcoFacebook /><div className="txt">Facebook</div></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-sns-login google"><IcoGoogle /><div className="txt">Google</div></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-sns-login apple"><IcoApple /><div className="txt">Apple</div></button>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="explain-txt">
                걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.<br/>
                회원가입 시 <a href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>과 
                <a href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>을 확인하였으며, 동의합니다.
            </p>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
    .tit-wrap {text-align: center; margin: 24px 0 40px;}
    .tit-wrap .login-tit {line-height: 1.54; font-size: 26px; font-weight: 600;}
    .tit-wrap .sub-tit {margin-top: 16px; line-height: 1.5; font-size: 16px; font-weight: 400; color: #666;}
    .inp-grp .label-txt {font-size: 14px; font-weight: 400;}
    .inp-grp .inp-wrap {margin-top: 11px;}
    .inp-grp .inp-txt {width: 100%; height: 50px; padding-right: 15px; padding-left: 15px; border-radius: 5px; border: 1px solid #e1e2e3; background-color: #fff; font-size: 15px; }
    .inp-grp .inp-txt:focus {border-color:#36f;}
    .inp-grp .inp-txt::placeholder {color:#767676;}
    
    .btn-wrap {margin-top:15px;}

    .other-login-wrap .or-txt {color: #969696; font-size: 14px; font-weight: 500; line-height: 1; text-align: center; margin: 13px auto;}
    .other-login-wrap .tit {text-align: center; color: #767676; margin-bottom: 17px; font-size: 14px;}

    .sns-login-list {display:flex;}
    .sns-login-list li {flex:1; position:relative; height:84px;}
    .sns-login-list li .btn-sns-login{display:flex; align-items:center; justify-content:center; width: 56px; height: 56px; margin: 0 auto 8px; color: #737373; border-radius: 28px;}
    .sns-login-list li .btn-sns-login.kakao {background-color:#fee500;}
    .sns-login-list li .btn-sns-login.facebook {background-color:#1877f2;}
    .sns-login-list li .btn-sns-login.google {border: 1px solid #e1e2e3; background-color: #fff;}
    .sns-login-list li .btn-sns-login.apple {background-color:#000;}
    .sns-login-list li .btn-sns-login .txt {position:absolute; width:70%; top: 62px; left: 14.5%; font-size: 13px; font-weight: 500; color: #666; text-align: center;}

    .explain-txt {margin-top: 26px; text-align: center; font-size: 12px; line-height: 18px; color: #999;}
    .explain-txt a {color: #3336ff; text-decoration: underline;}
    
    
`;

export default Login