import styled from "styled-components"

const MyBanner = () => {
  return (
    <MyBannerStyled>
        <div className="txt-wrap">
            <p className="tit">입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
            <div className="sub-btn">지금 확인하기</div>
        </div>
        <div className="img">
            <img src="images/mypage-banner.png" alt="" />
        </div>
    </MyBannerStyled>
  )
}

const MyBannerStyled = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #5071dc;
    .sub-btn {display:flex; align-items:center; justify-content: center; width: 119px; height: 32px; margin-top: 10px; border-radius: 25px; background-color: #5071dc; color: #fff; font-size: 13px; font-weight: 700; line-height: 16px;}
    .img {position:absolute; right: 46px; bottom: 16px; width: 164px; height: 108px;}
    .img img {width:100%;}
    
`;

export default MyBanner