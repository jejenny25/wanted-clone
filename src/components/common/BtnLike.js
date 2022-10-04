import styled from "styled-components"

const BtnLike = (props) => {
  return (
    <BtnLikeStyled active={props.active}><i className="ico icon-ic_favorite_black_24px"></i><span className="cnt">10</span></BtnLikeStyled>
  )
}

const BtnLikeStyled = styled.button`
    position:absolute; display:flex; top:10px; right:10px; width: 60px; height: 30px; border-radius: 3px; background: rgba(0,0,0,.3); font-size: 12px; align-items:center; justify-content:center;
    color:#fff;
    .ico {margin-right:5px; color:${props=>props.active?'#ff415c':'rgba(255,255,255,.3)'}; }
`

export default BtnLike