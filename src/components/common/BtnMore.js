import styled from "styled-components"

const BtnMore = (props) => {
  return (
    <BtnMoreStyled onClick={props.introMore} active={props.isMoreDetail}>
        <span className="txt">{props.isMoreDetail? "접기" : "더보기"}</span>
        <i className="icon-arrow_down"></i>
    </BtnMoreStyled>
  )
}

const BtnMoreStyled = styled.button`
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #999;
    padding: 10px 0;
    .icon-arrow_down { display:inline-block; margin-left:10px; transform:rotate(${props=>props.active ?'180deg':'0'});}
`;

export default BtnMore