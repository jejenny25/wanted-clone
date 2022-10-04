import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as IcoArr2 } from "../../assets/svg/ico-arr2.svg";

const Selector = () => {
    const [isActive, setActive] = useState(false);
    const [selected, setSelected] = useState("응답률순");
    const [orderby, setOrderby] = useState(["최신순", "보상금순", "인기순"]);
    const selectorEl = useRef(); // 

    const onClick = () => {
        setActive(!isActive);
    };

    const orderBy= (thisVal, idx) => {
        let copiedItems = [...orderby]; 
        copiedItems[idx] = selected; /* 복사한 배열에 수정할 값을 할당하고 */
        setOrderby(copiedItems); /* setItems를 사용해 수정한 배열로 items를 업데이트 한다. */
        setSelected(thisVal);
        setActive(false);
    }

    const handleClickOutside = ({ target }) => {
        //if (isGrpOpen && !jobgrpEl.current.contains(target) && !isGrpOpen.current.contains(target))
        if (!selectorEl.current.contains(target))
        {
            setActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <SelectorStyled active={isActive} ref={selectorEl}>
        <button type="button" className="btn btn-filter" onClick={onClick}><span className="tit">{selected}</span><span className="ico"><IcoArr2/></span></button>
        <ul className="selector-list" >
            {
                orderby.map((value, index) => { 
                    return <li key={index}><button type="button" className="btn" onClick={() => orderBy(value, index)} value={value}><span>{value}</span></button></li>
                })
            }
        </ul>
    </SelectorStyled>
  )
}

const SelectorStyled = styled.div`
    position:relative;
    .ico {transform: rotate(${props=>props.active?"180deg":"0"});}
    .selector-list {position: absolute; display:${props=>props.active?"block":"none"}; top: 39px; left: 0; right: 0; z-index: 50; background: #fff; border: 1px solid #ececec; border-radius: 0 0 4px 4px;}
    .selector-list .btn {width:100%; border:none !important; border-bottom:1px solid #ececec !important; border-radius: 0;}
    .selector-list li:last-child .btn {border-bottom:0 !important;}
`;

export default Selector