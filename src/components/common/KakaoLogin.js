import styled from "styled-components";

import { ReactComponent as IcoKakao } from "../../assets/svg/ico-kakao.svg";

const KakaoLogin = () => {
    const REST_API_KEY = "5f76191f7b20ec17876cfdb66a5374d5";
    const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
        <a href={KAKAO_AUTH_URL} className="btn btn-sns-login kakao"><IcoKakao /><div className="txt">Kakao</div></a>
    </div>
  )
}

export default KakaoLogin