import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as IcoArr2 } from "../../assets/svg/ico-arr2.svg";

import { useDispatch } from "react-redux";
import { ACTIVE } from "../../store/reducers";

const Selector = () => {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();

    const onClick = () => {
        setActive(!isActive);
        alert('active : ' + isActive);
        dispatch({
            type: ACTIVE,
            data: isActive,
        });
    };

  return (
    <SelectorStyled>
        <button type="button" className="btn btn-filter" onClick={onClick}><span className="tit">응답률순</span><span className="ico"><IcoArr2/></span></button>
        <ul className="selector-list">
            <li><button type="button" className="btn"><span>최신순</span></button></li>
            <li><button type="button" className="btn"><span>보상금순</span></button></li>
            <li><button type="button" className="btn"><span>인기</span></button></li>
        </ul>
    </SelectorStyled>
  )
}

const SelectorStyled = styled.div`
    position:relative;
    .selector-list {position: absolute; top: 39px; left: 0; right: 0; z-index: 50; background: #fff; border: 1px solid #ececec; border-radius: 0 0 4px 4px;}
    .selector-list .btn {width:100%; border:none !important; border-bottom:1px solid #ececec !important; border-radius: 0;}
    .selector-list li:last-child .btn {border-bottom:0 !important;}
`;

export default Selector