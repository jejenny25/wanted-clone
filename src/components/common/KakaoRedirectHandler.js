import React, { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//import { useDispatch } from 'react-redux';
import { chageLogin } from "../../store/reducers/loginInfo";

const KakaoRedirectHandler = () => {
    const navigate = useNavigate();

    // dispatch를 사용하기 위한 준비
    //const dispatch = useDispatch();

    useEffect(()=> {
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code"); // 인가코드 받는 부분
        //let grant_type = "c46mUbpVYFlNEgDL2BFvfZZlBsksjZcC";
        let grant_type = "authorization_code";
        let client_id = "5f76191f7b20ec17876cfdb66a5374d5";
    
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`
            , {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
            // Kakao Javascript SDK 초기화
            window.Kakao.init(client_id);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            
            const getProfile = async () => {
                try {
                    // Kakao SDK API를 이용해 사용자 정보 획득
                    let data = await window.Kakao.API.request({
                        url: "/v2/user/me",
                    });
                    console.log(data);
                    // 사용자 정보 변수에 저장
                    window.localStorage.setItem('isLogin', true);
                    window.localStorage.setItem('userNM', "채지은");
                    window.localStorage.setItem('userID', data.kakao_account.email);
                    window.localStorage.setItem('profilePic', data.properties.profile_image);
                    window.location.reload();
                    // dispatch(chageLogin( 
                    //   {
                    //     _isLogin: true, 
                    //     _userNM: '채지은', 
                    //     _userID:data.kakao_account.email, 
                    //     _profilePic :data.properties.profile_image
                    //   } 
                    // ));
                } catch (err) {
                    console.log(err);
                }
            };
            getProfile();
            navigate('/');
      })
    }, [])
  return (
    <div></div>
  )
}

export default KakaoRedirectHandler