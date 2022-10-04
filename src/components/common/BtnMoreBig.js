import styled from "styled-components"

const BtnMoreBig = (props) => {
  return (
    <BtnMoreBigStyled onClick={props.adMore} active={props.isMoreAd}>
        <span className="txt">{props.isMoreAd? "접기" : "더 많은 포지션 보기"}</span>
        <i className="icon-arrow_down"></i>
    </BtnMoreBigStyled>
  )
}

const BtnMoreBigStyled = styled.button`
    width: 100%;
    padding: 16px;
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    line-height: 1;
    font-size: 16px;
    font-weight: 400;
    color: #999;
    .icon-arrow_down { display:inline-block; margin-left:10px; transform:rotate(${props=>props.active ?'180deg':'0'});}
`;

export default BtnMoreBig