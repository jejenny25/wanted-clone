import styled from "styled-components"

import { ReactComponent as IcoBookmark3 } from "../../assets/svg/ico-bookmark3.svg";

const BtnBookmark = (props) => {

  return (
    <BookmarkBtnStyled active={props.active}><span className="ico"><IcoBookmark3 /></span></BookmarkBtnStyled>
  )
}

const BookmarkBtnStyled = styled.button`
    position:absolute; top:0; right:0; width: 42px; height: 42px; padding: 8px 6px; color:#fff;
    .ico svg{fill:${props=>props.active?'#3366ff':'rgba(0,0,0,.3)'}; }

    //fill-opacity:${props=>props.active?'1':'0.25'};
`

export default BtnBookmark