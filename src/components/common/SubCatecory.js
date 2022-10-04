import styled from "styled-components"

import { Link } from "react-router-dom"

const SubCatecory = (props) => {
    //alert("subtype : " + props.subtype);
    
  return (
    <>
        <ul style={{display: `${props.subtype === "type0" ? 'block' : 'none'}`}}>
        {/* <ul> */}
            <li><Link to="#" className="item">개발 전체</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">서버개발자</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">웹 개발자</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">프론트엔드 개발자</Link><i className="icon-arrow_right"></i></li>
        </ul>

        <ul style={{display: `${props.subtype === "type1" ? 'block' : 'none'}`}}>
            <li><Link to="#" className="item">경영&middot;비즈니스 전체</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">서비스 기획자</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">PM&middot;PO</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">사업개발&middot;기획자</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">경영지원</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">운영매니저</Link><i className="icon-arrow_right"></i></li>
        </ul>

        <ul style={{display: `${props.subtype === "type2" ? 'block' : 'none'}`}}>
            <li><Link to="#" className="item">마케팅,광고 전체</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">마케터</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">디지털 마케터</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">콘텐츠 마케터</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">퍼포먼스 마케터</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">마케팅 전량 기획자</Link><i className="icon-arrow_right"></i></li>
        </ul>

        <ul style={{display: `${props.subtype === "type3" ? 'block' : 'none'}`}}>
            <li><Link to="#" className="item">디자인 전체</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">UX 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">UI, GUI 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">웹 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">그래픽 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">모바일 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">BI/BX 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">광고 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">제품 디자이너</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">영상,모션 디자이너</Link><i className="icon-arrow_right"></i></li>
        </ul>

        <ul style={{display: `${props.subtype === "type4" ? 'block' : 'none'}`}}>
            <li><Link to="#" className="item">영업 전체</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">기업영업</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">외부영업</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">영업 관리자</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">기술영업</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">주요고객사 담당자</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">해외영업</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">솔루션 컨설턴트</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">고객성공매니저</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">미디어 세일즈</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">세일즈 엔지니어</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">내부영업</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">의료기기 영업</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">제약영업</Link><i className="icon-arrow_right"></i></li>
        </ul>
        
        <ul style={{display: `${props.subtype === "type5" ? 'block' : 'none'}`}}>
            <li><Link to="#" className="item">고객서비스리테일전체</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">서비스 운영</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">MD</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">CS 매니저</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">리테일 MD</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">CS 어드바이저</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">패션 MD</Link><i className="icon-arrow_right"></i></li>
            <li><Link to="#" className="item">CRM 전문가</Link><i className="icon-arrow_right"></i></li>
        </ul>
    </>

  )
}

export default SubCatecory