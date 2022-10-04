import styled from "styled-components"

import { ReactComponent as IcoBookmark } from "../../assets/svg/ico-bookmark2.svg";
import { ReactComponent as IcoBookmarkFill } from "../../assets/svg/ico-bookmark2_fill.svg";

const BtnBookmark2 = (props) => {

  return (
    <BookmarkBtnStyled>
        {props.active? <IcoBookmarkFill/> : <IcoBookmark />}
    </BookmarkBtnStyled>
  )
}

const BookmarkBtnStyled = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    color: #86939e;
    width: 34px;
    height: 34px;
    border: 1px solid #e1e2e3;
    border-radius: 17px;
    
`

export default BtnBookmark2