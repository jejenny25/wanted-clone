import React, {useState, useRef, useEffect} from "react"
import styled from "styled-components";

import {InnerStyled} from "../common/styled"
import Selector  from "../common/Selector"
import TagSlide from "../job/TagSlide"

import { ReactComponent as IcoArr } from "../../assets/svg/ico-arr.svg";
import { ReactComponent as IcoArr2 } from "../../assets/svg/ico-arr2.svg";

const Filter = React.forwardRef((props,ref) => {
    const [isGrpOpen, setIsGrpOpen] = useState(false);
    const jobgrpBtnEl = useRef(); // 
    const jobgrpEl = useRef(); // 

    const groupOpen = () => {
        setIsGrpOpen((isGrpOpen) => !isGrpOpen);
    }

    const handleClickOutside = ({ target }) => {
        //if (isGrpOpen && !jobgrpEl.current.contains(target) && !isGrpOpen.current.contains(target))
        if (!jobgrpEl.current.contains(target) && !jobgrpBtnEl.current.contains(target))
        {
            setIsGrpOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <FilterStyled ref={ref} active={props.isFilterFixed} isGrpOpen={isGrpOpen}>
        <InnerStyled>
            {/* <ContainerStyled> */}
                <div className="category-wrap">
                    <div className="job-group-wrap" ref={jobgrpBtnEl}>
                        <button type="button" className="btn btn-job-group" onClick={groupOpen}><span>전체</span><span className="btn-ico-arr"><IcoArr/></span></button>
                        <div className="job-group" ref={jobgrpEl}>
                            <ul className="group-list">
                                <li><button type="button" className="btn "><span>전체</span></button></li>
                                <li><button type="button" className="btn "><span>개발</span></button></li>
                                <li><button type="button" className="btn "><span>경영&middot;비즈니스</span></button></li>
                                <li><button type="button" className="btn "><span>마케팅&middot;광고</span></button></li>
                                <li><button type="button" className="btn "><span>디자인</span></button></li>
                                <li><button type="button" className="btn "><span>영업</span></button></li>
                                <li><button type="button" className="btn "><span>고개서비스&middot;리테일</span></button></li>
                                <li><button type="button" className="btn "><span>게임 제작</span></button></li>
                                <li><button type="button" className="btn "><span>HR</span></button></li>
                                <li><button type="button" className="btn "><span>미디어</span></button></li>
                                <li><button type="button" className="btn "><span>금융</span></button></li>
                                <li><button type="button" className="btn "><span>엔지니어링&middot;설계</span></button></li>
                                <li><button type="button" className="btn "><span>물류&middot;무역</span></button></li>
                                <li><button type="button" className="btn "><span>제조&middot;생산</span></button></li>
                                <li><button type="button" className="btn "><span>의료&middot;제약&middot;바이오</span></button></li>
                                <li><button type="button" className="btn "><span>교육</span></button></li>
                                <li><button type="button" className="btn "><span>식&middot;음료</span></button></li>
                                <li><button type="button" className="btn "><span>법률&middot;법집행기관</span></button></li>
                                <li><button type="button" className="btn "><span>건설&middot;시설</span></button></li>
                                <li><button type="button" className="btn "><span>공공&middot;복지</span></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="job-duty-wrap">
                        <button type="button" className="btn btn-job-duty"><span>직군을 선택해주세요.</span><span className="btn-ico-arr"><IcoArr/></span></button>
                    </div>
                </div>
                <div className="filter-btn-wrap">
                    <div className="filter-side">
                        <button type="button" className="btn btn-filter"><span className="tit">지역</span><span className="txt">한국</span><span className="num">1</span></button>
                        <button type="button" className="btn btn-filter"><span className="tit">경력</span><span className="txt">전체</span><span className="ico"><IcoArr2/></span></button>
                        <button type="button" className="btn btn-filter"><span className="tit">기술스택</span><span className="ico"><IcoArr2/></span></button>
                    </div>
                    <div className="order-side">
                        <Selector/>
                    </div>
                </div>
                <TagSlide />
            {/* </ContainerStyled> */}
        </InnerStyled>
    </FilterStyled>
  )
})

const FilterStyled = styled.div`
    width: 100%;
    background: #fff;
    z-index: 50;
    position:${props=>props.active?'fixed':'relative'};
    margin-bottom: 25px;
    border-bottom:1px solid ${props=>props.active?'#36f':'transparent'};
    padding-bottom:${props=>props.active?'25px':'0'};

    .btn-ico-arr {display:inline-flex; width:26px; height:26px; margin-left:15px; border:1px solid #e1e2e3; border-radius:50%; transition:.3s; justify-content:center; align-items:center}
    .btn-ico-arr:hover {border-color:#767676;} 

    .category-wrap {display:${props=>props.active?'none':'flex'}; position:relative; align-items:center; margin-top:40px;}
    .category-wrap .job-group-wrap {display:flex; align-items:center;}
    .job-group-wrap .btn-job-group {display:flex; align-items:center; font-size: 24px; line-height: 29px; font-weight: 700;}
    .job-group-wrap .btn-job-group .btn-ico-arr {transform: rotate(${props=>props.isGrpOpen?'180deg':'0deg'});}
    .job-group {position: absolute; display:${props=>props.isGrpOpen?'block':'none'}; left: 0; right: 0; bottom: 0; top: 40px; overflow-y: hidden; max-width:190px; height: 70vh; background-color: #fff; border: 1px solid #e1e2e3; box-shadow: 0 4px 8px rgb(0 0 0 / 15%); border-radius: 5px; z-index: 50; padding: 15px 0;}
    .job-group:hover {overflow-y:scroll;}
    .job-group::-webkit-scrollbar-thumb{ background: rgba(0,0,0,.2);}
    .job-group::-webkit-scrollbar, 
    .job-group::-webkit-scrollbar-thumb {border-radius: 4px; width: 5px;}
    .job-group .group-list .btn {display: flex; align-items: center; width:100%; font-size: 16px; padding: 10px 0 10px 25px; }
    .job-group .group-list .btn:hover {background-color:#f8f8f8;}

    .job-duty-wrap {display:flex; align-items:center;}
    .job-duty-wrap:before {content: "|"; font-size: 28px; line-height: 29px; padding: 3px 24px 0; color: #ececec;}
    .job-duty-wrap .btn-job-duty {font-size: 24px; line-height: 29px; font-weight: 400; color: #aaa;}

    .filter-btn-wrap {margin-top:35px; display:flex; align-items:center; justify-content:space-between;}
    .filter-btn-wrap .btn {display:inline-flex; height:40px; padding: 0 15px; border-radius:5px; border: 1px solid #ececec; position: relative; align-items:center;}
    .filter-btn-wrap .btn + .btn {margin-left:10px;}
    .filter-btn-wrap .btn .tit {display:inline-block; margin-right:15px;}
    
    .filter-btn-wrap .btn .txt {display:inline-block; font-weight:600; color:#36f;}
    .filter-btn-wrap .btn .ico {display:inline-block; margin-left:10px; transition:.3s;}
    .filter-btn-wrap .btn .num {position: absolute; top: 4px; right: 0; transform: translate(50%,-50%); background-color: #36f; border-radius: 10px; color: #fff; display: inline-block; font-size: 12px; font-weight: 600; width: 20px; height: 20px; line-height: 20px; margin-left: 7px;}
    
`;

export default Filter