import {useState} from "react"
import styled from "styled-components"

import { ReactComponent as IcoWarn } from "../../assets/svg/ico-warn.svg";

const WarningBox = () => {
    const [isOpened, setIsOpend] = useState(false);

    const openBody = () => {
        setIsOpend(!isOpened);
    }
  return (
    <WarningBoxStyled active={isOpened}>
        <div className="header">
            <div className="txt-wrap">
                <div className="ico"><IcoWarn /></div>
                <p className="txt">본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며,<br />구직활동 이외의 용도로 사용할 수 없습니다.</p>
            </div>
            <button type="button" className="btn btn-open" onClick={openBody}><i className="icon-arrow_down"></i></button>
        </div>
        <div className="body-content">
            <p className="txt">본 채용 정보는 <strong>피큐레잇</strong>에서 제공한 자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로 사용될 수 없습니다. 원티드랩은 <strong>피큐레잇</strong>에서 게재한 자료에 대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다. <strong>&lt;저작권자 (주)원티드랩. 무단전재-재배포금지&gt;</strong></p>
        </div>
    </WarningBoxStyled>
  )
}

const WarningBoxStyled = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    background-color: #f3f5f8;

    .header {display:flex; align-items:center; padding: 18px 30px;justify-content:space-between;}
    .header .txt-wrap {display:flex; align-items:center;}
    .header .txt-wrap .txt { margin: 0 20px; font-size: 12px; font-weight: 700; line-height: 22px; color: #333;}

    .body-content {display:${props=>props.active?'block':'none'}; padding: 13px 30px 30px; border-top: 1px solid #ececec;}
    .body-content .txt {font-size: 13px; line-height: 24px; color: #666;}
    .body-content .txt strong {font-weight:700;}
`;

export default WarningBox
