import styled from "styled-components"

import {InnerStyled} from "../../components/common/styled"
import InsightFilter from "../../components/main/InsightFilter"
import InsightList from "../../components/main/InsightList"

import { ReactComponent as IcoQuestion } from "../../assets/svg/ico-question.svg";

const SectionInsight = () => {
  return (
    <InnerStyled>
        <SectionInsightStyled>
            <div className="tit-wrap">
                <h3 className="tit">나에게 필요한 커리어 인사이트<button type="button" className="btn btn-tooltip"><IcoQuestion /></button></h3>
            </div>

            <InsightFilter />

            <InsightList />

        </SectionInsightStyled>

    </InnerStyled>
  )
}

const SectionInsightStyled = styled.div`
    padding:64px 0;
    .tit-wrap {display:flex; justify-content:center;}
    .tit-wrap .tit {display:flex; align-items:center; font-size:22px; line-height: 1.33; font-weight: 700;}
    .tit-wrap .tit .btn{width:24px; height:24px; margin-left:5px;}
    .tit-wrap .tit .btn svg {width:24px; height:24px;}
`;

export default SectionInsight