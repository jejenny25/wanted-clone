import styled from "styled-components"

import {BtnBigBorderStyled, BtnBigStyled} from "../../components/common/styled"

import { ReactComponent as IcoShare } from "../../assets/svg/ico-share.svg";
import { ReactComponent as IcoBookmark2 } from "../../assets/svg/ico-bookmark2.svg";
import { ReactComponent as IcoQuestion } from "../../assets/svg/ico-question.svg";

import {LinkedinShareButton } from "react-share";

const ApplyBtnBox = (props) => {
  return (
    <ApplyBtnBoxStyled isScrollBot={props.isScrollBot}>
        <div className="top-box">
            <div className="txt-area">
                <p className="tit">채용보상금</p>
                <ul>
                    <li>
                        <p className="tit">추천인</p>
                        <p className="prize">500,000원</p>
                    </li>
                    <li>
                        <p className="tit">지원자</p>
                        <p className="prize">500,000원</p>
                    </li>
                </ul>
                <LinkedinShareButton url={"https://www.linkedin.com/"}><span className="ico"><IcoShare /></span></LinkedinShareButton>
                {/* <button type="button" className="btn btn-share"><span className="ico"><IcoShare /></span></button> */}
            </div>

            <div className="btn-wrap">
                <BtnBigBorderStyled><span className="ico-bookmark"><IcoBookmark2 /></span><span className="txt">북마크하기</span></BtnBigBorderStyled>
                <BtnBigStyled><span className="txt">지원하기</span></BtnBigStyled>

                <button type="button" className="btn btn-like"><span className="txt-icon icon-ic_favorite_black_24px"></span> <span className="txt">0</span></button>
            </div>
        </div>

        <div className="ai-wrap">
            <div className="left-item">
                <div className="img"><img src="images/logo-wantedai.png" alt="" /></div>
                <div className="txt">합격예측</div>
            </div>
            <div className="right-item">
                <div className="txt">서류합격률이 궁금하다면?</div>
                <button type="button" className="btn btn-tooltip"><IcoQuestion /></button>
            </div>
        </div>
    </ApplyBtnBoxStyled>
  )
}

const ApplyBtnBoxStyled = styled.div`
    width: 340px;
    position: ${props=>props.isScrollBot?'absolute':'fixed'};
    top:${props=>props.isScrollBot?'inherit':'70px'};
    bottom:${props=>props.isScrollBot?'0':'inherit'};
    right: calc((100% - 1060px)/2);

    .top-box {width: 340px; border: 1px solid #e1e2e3; background-color: #fff; padding: 24px 20px;}
    .top-box .txt-area .tit {font-size: 15px; font-weight: 600; color: #333;}
    .top-box .txt-area ul {display:flex; margin: 24px 0;}
    .top-box .txt-area ul li {flex:1}
    .top-box .txt-area ul li .tit {font-size: 14px; font-weight: 600; color: #999; margin-bottom: 8px; line-height: 1.2;}
    .top-box .txt-area ul li .prize {font-size: 15px; color: #333; font-weight: 600;}
    .top-box .react-share__ShareButton {display:flex; align-items:center; justify-content:center; position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; background: #fff; border-radius: 20px; border: 1px solid #e1e2e3 !important;}
    .top-box .react-share__ShareButton .ico,
    .top-box .react-share__ShareButton svg {display:inline-block; width:18px; height:18px;}
    /* .top-box .btn-share {display:flex; align-items:center; justify-content:center; position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; background: #fff; border-radius: 20px; border: 1px solid #e1e2e3;}
    .top-box .btn-share .ico,
    .top-box .btn-share svg {display:inline-block; width:18px; height:18px;} */

    
    .btn-wrap button+button {margin-top:10px}
    .btn-wrap .btn-like {display:flex; align-items:center; justify-content:center; height: 30px; margin-top:24px; border-radius: 15px; border: 1px solid #e1e2e3; padding: 0 15px;}
    .btn-wrap .btn-like .txt-icon {display:inline-block; font-size: 16px; color: #dbdbdb; margin-right: 10px; position: relative; top: 1px;}
    .btn-wrap .btn-like .txt {font-weight: 600; line-height: 30px;}

    .ai-wrap {display:flex; margin-top:10px; align-items:center; justify-content:space-between; background-color:#f3f5f8; border-radius:4px; padding: 11px 15px 10px;}
    .ai-wrap .left-item {display:flex; align-items:center; }
    .ai-wrap .left-item .img {position: relative; top: -1px; width:70px; margin-right:5px;}
    .ai-wrap .left-item .img img {width:100%;}
    .ai-wrap .left-item .txt {font-weight:600;}

    .ai-wrap .right-item {display:flex; align-items:center; }
    .ai-wrap .right-item .txt {line-height: 1.5;color: #999;}
    .ai-wrap .right-item .btn-tooltip {height:17px; margin-left: 6px; margin-right: 3px;}
    
`;

export default ApplyBtnBox