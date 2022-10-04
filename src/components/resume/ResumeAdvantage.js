import styled from "styled-components";

import {InnerStyled} from "../../components/common/styled"

const ResumeAdvantage = () => {
    return (
        <ResumeAdvantageStyled>
            <InnerStyled>
                <div className="tit-wrap">
                    <h2 className="tit">원티드 이력서는 이런 점이 좋아요!</h2>
                </div>
                <div className="advantage-wrap">
                    <ul>
                        <li className="item item01">
                            <div className="txt-wrap">
                                <p className="tit">이력서 하나로 모든 준비 끝</p>
                                <p className="txt">이력서 작성부터 지원까지 한 곳에서!<br />회사별 양식에 맞출 필요 없이 하나의 이력서만 작성하세요.</p>
                            </div>
                            <div className="img"><img src="images/resume/resume_advantage_01.png" alt="" /></div>
                        </li>
                        <li className="item item02">
                            <div className="txt-wrap">
                                <p className="tit">완성도를 높여주는 이력서 코칭</p>
                                <p className="txt">이력서 코칭*으로 서류 합격률 30% UP<br />300만 합격 데이터를 분석해 합·불합격 단어를 알려드려요.</p>
                                <p className="explain">*일부 직군에서는 사용 제한, 추후 확대 예정</p>
                            </div>
                            <div className="img"><img src="images/resume/resume_advantage_02.png" alt="" /></div>
                        </li>
                        <li className="item item03">
                            <div className="txt-wrap">
                                <p className="tit">이력서만 등록해도 찾아오는 면접 제안</p>
                                <p className="txt">매치업은 서류 전형 없이 바로 면접 진행!<br />채용담당자가 직접 면접을 제안합니다.</p>
                            </div>
                            <div className="img"><img src="images/resume/resume_advantage_03.png" alt="" /></div>
                        </li>
                        <li className="item item04">
                            <div className="txt-wrap">
                                <p className="tit">언제 어디서나 자유롭게 작성</p>
                                <p className="txt">주말엔 노트북, 출퇴근길엔 스마트폰으로.<br />자유롭게 작성하고 필요할 땐 PDF로 저장하세요.</p>
                            </div>
                            <div className="img"><img src="images/resume/resume_advantage_04.png" alt="" /></div>
                        </li>
                    </ul>
                </div>
            </InnerStyled>

        </ResumeAdvantageStyled>
    )
}

const ResumeAdvantageStyled = styled.div`
    padding:100px 0;
    .tit-wrap .tit {font-weight: 700; font-size: 36px; text-align:center;}
    .advantage-wrap {margin-top:50px;}
    .advantage-wrap ul {display:grid; grid-template-columns: repeat(2, 1fr); grid-gap:20px;}
    .advantage-wrap .item {height: 480px; padding-top: 50px; border-radius: 10px; text-align: left; display: flex; flex-wrap: wrap; align-content: space-between;}
    .advantage-wrap .item .img {width:100%;}
    .advantage-wrap .item .img img {width:100%;}
    .advantage-wrap .item.item01 {background-color:#f1f7fe;}
    .advantage-wrap .item.item02 {background-color:#f1f1fe;}
    .advantage-wrap .item.item03 {background-color:#f3f8ee;}
    .advantage-wrap .item.item04 {background-color:#ecf8fb;}
    .advantage-wrap .item .txt-wrap {padding-left:50px;}
    .advantage-wrap .item .txt-wrap .tit {font-weight: 600; font-size: 26px; line-height: 135.7%;}
    .advantage-wrap .item .txt-wrap .txt {font-size: 16px; line-height: 150%; margin-top: 15px;}
    .advantage-wrap .item .txt-wrap .explain {font-size: 14px; line-height: 150%; margin-top: 5px; color: #939393;}
`;

export default ResumeAdvantage