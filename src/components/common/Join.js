import styled from "styled-components"
import axios from 'axios';
import UseDidMountEffect from './UseDidMountEffect.js';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { chageModal } from "../../store/reducers/modal";

import {InpGrpStyled, AgreementStyled, BtnBigStyled, ErrTxt} from "../../components/common/styled"

import { ReactComponent as IcoCheckbox } from "../../assets/svg/ico-checkbox.svg";
import { ReactComponent as IcoCheckbox2 } from "../../assets/svg/ico-checkbox-checked.svg";

const Join = () => {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    const _email = window.localStorage.getItem('userID');
    
    const [userName, setUserName] = useState ();
    const [userNameMsg, setUserNameMsg ] = useState("");
    const [isUserName, setIsUserName ] = useState(true);
    
    const [countryCode, setCountryCode] = useState ("대한민국 +82");
    const [phoneNo, setPhoneNo] = useState ("");
    const [phoneNoMsg, setphoneNoMsg ] = useState("");
    const [isPhoneNo, setIsPhoneNo ] = useState(true);

    const [password, setPassword] = useState ("");
    const [pwMsg, setPwMsg ] = useState("");
    const [isPw, setIsPw ] = useState(true);

    const [passwordC, setPasswordC] = useState ("");
    const [pwMsgC, setPwMsgC ] = useState("");
    const [isPwC, setIsPwC ] = useState(true);

    const [isAgree, setIsAgree ] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const url =`https://dev.wanted-clone.site/api/users/sign-up`;

    const data = [
        {id: 0, title: '개인정보 수집 및 이용 동의(필수)'},
        {id: 1, title: '이벤트 소식 등 알림 정보 받기'}
    ];

    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);
    //Life cycle
    UseDidMountEffect(() => {
        chkName();
    }, [userName]);

    UseDidMountEffect(() => {
        chkPhoneNo();
    }, [phoneNo]);
    
    UseDidMountEffect(() => {
        chkPw();
    }, [password]);

    UseDidMountEffect(() => {
        chkPwC();
    }, [passwordC]);

    useEffect(() => {
        //alert("isAgree : " + isAgree);
        if(isUserName && isPhoneNo && isPw & isPwC && isAgree){
            setBtnDisabled(false);
        }else{
            setBtnDisabled(true);
        }
    }, [isUserName, isPhoneNo, isPw, isPwC, isAgree]);

    const changeCode = (e) => {
        setCountryCode(e.target.value);
    }

    // 이름 체크
    const chkName = () => {
        //setUserName(e.target.value);
        if(userName === ""){
            setUserNameMsg("이름은 필수정보 입니다.");
            setIsUserName(false);
        }else{
            setUserNameMsg("");
            setIsUserName(true);
            return;
        }
    }

    // 휴대폰번호 체크
    const chkPhoneNo = () => {
        if(phoneNo === "" ){
            setphoneNoMsg("휴대폰 번호는 필수정보 입니다.");
            setIsPhoneNo(false);
        }else{
            if (phoneNo.length > 11) {
                setphoneNoMsg("올바른 전화번호를 입력해 주세요.");
                setIsPhoneNo(false);
            }else{
                setphoneNoMsg("");
                setIsPhoneNo(true);
                return;
            }
        }
    }

    // 비밀번호 체크
    const chkPw = () => {
        //  8 ~ 10자 영문, 숫자 조합
        const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,20}$/
        if (!regExp.test(password)) {// 형식에 맞는 경우 true 리턴
            setPwMsg('올바른 비밀번호 형식을 입력해주세요.');
            setIsPw(false);
        } else {
            setIsPw(true);
        }
    }
    
    //console.log(passwordC);
    // 비밀번호 확인 체크
    const chkPwC = () => {
        
        if (password === passwordC) {
            setIsPwC(true);
        } else {
            setPwMsgC('비밀번호가 일치하지 않습니다.');
            setIsPwC(false);
        }
    }

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, id]);
            if(id === 0){
                setIsAgree(true);
            }
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
            if(id === 0){
                setIsAgree(false);
            }
        }
    };

     // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if(checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            data.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
            setIsAgree(true);
        }
        else {
         // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
            setIsAgree(false);
        }
    }

    const goJoin = async() =>  {
        chkName();
        chkPhoneNo();
        chkPw();
        chkPwC();

        if(isUserName && isPhoneNo && isPw && isPwC){
            try{
                const getData = await axios({
                    method:'post',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data:{ 
                        email: _email,
                        name:userName,
                        contactCountry:countryCode,
                        contact :phoneNo,
                        password:password
                    }
                })
                console.log(getData.data);
                if(getData.data.code === 1000){
                    dispatch(chageModal( {active: false, modalType: 'join' } ));
                    alert("회원가입이 완료되었습니다! 로그인 해주세요.");
                }
            }
            catch(err){
                console.log(err);
            }
        }
    }
  return (
    <JoinWrapStyled>
        <InpGrpStyled>
            <div className="inp-wrap">
                <label htmlFor="name" className="label-txt">이름</label>
                <div className="inp-item">
                    <input type="text" className={`inp-txt ${isUserName ? "" : "has-err"}`} id="name" placeholder="이름을 입력해주세요." value={userName} onChange={(e) => { setUserName(e.target.value); }}/>
                </div>
                {isUserName ? "" : <ErrTxt>{userNameMsg}</ErrTxt>}
            </div>
            <div className="inp-wrap">
                <label htmlFor="phone" className="label-txt">휴대폰 번호</label>
                <div className="inp-item inp-select">
                    <span className="country-code">{countryCode}</span>
                    <select name="" id="" onChange={changeCode}>
                        <option value="+82 South Korea">+82 South Korea</option>
                        <option value="+81 Japan">+81 Japan</option>
                        <option value="+886 Taiwan">+886 Taiwan</option>
                        <option value="+852 Hong Kong">+852 Hong Kong</option>
                        <option value="+65 Singapore">+65 Singapore</option>
                        <option value="+93 Afghanistan">+93 Afghanistan</option>
                        <option value="+355 Albania">+355 Albania</option>
                        <option value="+213 Algeria">+213 Algeria</option>
                        <option value="+244 Angola">+244 Angola</option>
                        <option value="+54 Argentina">+54 Argentina</option>
                        <option value="+374 Armenia">+374 Armenia</option>
                        <option value="+297 Aruba">+297 Aruba</option>
                        <option value="+61 Australia">+61 Australia</option>
                        <option value="+43 Austria">+43 Austria</option>
                        <option value="+994 Azerbaijan">+994 Azerbaijan</option>
                        <option value="+973 Bahrain">+973 Bahrain</option>
                        <option value="+880 Bangladesh">+880 Bangladesh</option>
                        <option value="+375 Belarus">+375 Belarus</option>
                        <option value="+32 Belgium">+32 Belgium</option>
                        <option value="+501 Belize">+501 Belize</option>
                        <option value="+229 Benin">+229 Benin</option>
                        <option value="+975 Bhutan">+975 Bhutan</option>
                        <option value="+591 Bolivia">+591 Bolivia</option>
                        <option value="+267 Botswana">+267 Botswana</option>
                        <option value="+55 Brazil">+55 Brazil</option>
                        <option value="+673 Brunei">+673 Brunei</option>
                        <option value="+359 Bulgaria">+359 Bulgaria</option>
                        <option value="+226 Burkina Faso">+226 Burkina Faso</option>
                        <option value="+855 Cambodia">+855 Cambodia</option>
                        <option value="+237 Cameroon">+237 Cameroon</option>
                    </select>
                    <i className="icon-arrow_right"></i>
                </div>
                <div className="inp-item has-btn">
                    <input type="number" className={`inp-txt ${isPhoneNo ? "" : "has-err"}`} id="phone" placeholder="(예시) 01012345678" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value);}}/>
                    <button type="button" className="btn btn-code"><span>인증번호 받기</span></button>
                </div>
                <div className="inp-item">
                    <input type="text" className="inp-txt" placeholder="인증번호를 입력해주세요." disabled/>
                </div> 
                {isPhoneNo ? "" : <ErrTxt>{phoneNoMsg}</ErrTxt>}  
            </div>
            <div className="inp-wrap">
                <label htmlFor="pw" className="label-txt">비밀번호</label>
                <div className="inp-item">
                    <input type="password" className={`inp-txt ${isPw ? "" : "has-err"}`} id="pw" placeholder="비밀번호를 입력해주세요." value={password} onChange={(e) => { setPassword(e.target.value); }}/>
                </div>
                <p className="desc">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</p>
                {isPw ? "" : <ErrTxt>{pwMsg}</ErrTxt>}
            </div>
            <div className="inp-wrap">
                <label htmlFor="pw2" className="label-txt">비밀번호 확인</label>
                <div className="inp-item">
                    <input type="password" className={`inp-txt ${isPwC ? "" : "has-err"}`} id="pw2" placeholder="비밀번호를 다시 한번 입력해주세요." value={passwordC} onChange={(e) => { setPasswordC(e.target.value);}}/>
                </div>
                {isPwC ? "" : <ErrTxt>{pwMsgC}</ErrTxt>}
            </div>
        </InpGrpStyled>
        <AgreementStyled>
            <div className="all-wrap">
                <div className="agree-item">
                    <div className="chk-wrap">
                        <input type="checkbox" id="chkAll" className="inp-check" onChange={(e) => handleAllCheck(e.target.checked)}
                            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                            checked={checkItems.length === data.length ? true : false} />
                        <IcoCheckbox2 />
                    </div>
                    <label htmlFor="chkAll" className="txt">전체동의</label>
                </div>
            </div>
            <div className="child-wrap">
                {data?.map((data, key) => (
                    <div className="agree-item" key={key}>
                        <div className="chk-wrap">
                            <input type="checkbox" className="inp-check" name={`select-${data.id}`} id={`agree-${data.id}`}
                                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                                checked={checkItems.includes(data.id) ? true : false}/>
                            <IcoCheckbox2 />
                        </div>
                        <label htmlFor={`agree-${data.id}`} className="txt">{data.title}</label>
                        <Link to="#">자세히</Link>
                    </div>
                )) }
            </div>
        </AgreementStyled>

        <div className="btn-wrap">
            <div>
                <BtnBigStyled onClick={goJoin} disabled={btnDisabled}><span className="txt">회원가입하기</span></BtnBigStyled>
            </div>
        </div>
    </JoinWrapStyled>
  )
}

const JoinWrapStyled = styled.div`
    .all-wrap {margin-top:25px;}
    .btn-code {position: relative; margin-left: 10px;min-width: 117px; padding: 16px 15px 14px; border-radius: 5px; color: #36f; border:1px solid #e1e2e3; font-weight: 700;}
    .btn-code:disabled{background-color: #f2f4f7; color:#ccc}

    .btn-wrap {position:sticky; width:100%; left:0; bottom:0; }
    .btn-wrap > div {background-color:#fff; height: 70px;}
    .btn-wrap:before {content: ""; width: 100%; height: 30px; display: block; background: #fff; background: linear-gradient(180deg,hsla(0,0%,100%,0),#fff);}
`;

export default Join