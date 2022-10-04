import React from "react"
import styled from "styled-components"

import PlaceMap from "../../components/job/PlaceMap"

const JobPlace = React.forwardRef((props,ref) =>   {
    return (
        <JobPlaceStyled ref={ref}>
            <div className="txt-wrap">
                <div className="item">
                    <p className="tit">마감일</p>
                    <p className="txt">상시</p>
                </div>
                <div className="item">
                    <p className="tit">근무지역</p>
                    <p className="txt">강남구 삼성로 524</p>
                </div>
            </div>

            <PlaceMap />
        </JobPlaceStyled>
    )
})

const JobPlaceStyled = styled.div`
    margin:20px 0 40px;
    .txt-wrap .item {display:flex; margin-bottom:20px;}
    .txt-wrap .item .tit {width: 80px; font-size:16px; color: #999; font-weight:600;} 
    .txt-wrap .item .txt {width: calc(100% - 80px); font-size:16px; color: #333; font-weight:600;} 
    .map {width:100%; height:253px;}
`;

export default JobPlace