import styled from "styled-components";

import { Link } from "react-router-dom"

import {InnerStyled} from "../../components/common/styled"

const ResumeTooltip = () => {
  return (
    
    <ResumeTooltipStyled>
        <InnerStyled>
        <div className="lang-sel">
            <i className="icon icon-ic-language"></i>
            <select name="" id="">
                <option value="ko">한국어</option>
                <option value="ja">日本語</option>
                <option value="tw">繁體中文</option>
                <option value="en">English</option>
            </select>
            <i className="icon icon-arrow_bottom_fill"></i>
        </div>
        <div className="btn-grp">
            <div className="btn-guide-grp">
                <ul>
                    <li><Link to="#">합격 / 불합격 단어 가이드</Link></li>
                    <li><Link to="#">내 이력서 단어 체크</Link></li>
                    <li>
                        <label className="toggle-label">
                            <input className="" type="checkbox" />
                            <span className="toggle-slider"></span>
                        </label>
                    </li>
                </ul>
            </div>
            <button type="button" className="btn btn-download"><i className="icon-download"></i></button>
        </div>
        </InnerStyled>
    </ResumeTooltipStyled>
    
  )
}

const ResumeTooltipStyled = styled.div`
    position:fixed;
    background-color:#fff;
    top: 50px;
    right: 5%;
    left: 5%;
    z-index: 4;
    padding: 20px 0;
    > div {display:flex; align-items: center; justify-content: space-between;}
    .lang-sel {padding: 0; width:102px; height: 40px; border-radius: 2px; border: 1px solid #333; background-color: #fff; position: relative;}
    .lang-sel .icon { position: absolute; top: 50%; transform: translateY(-50%);}
    .lang-sel .icon-ic-language {font-size: 18px; left: 10px;}
    .lang-sel .icon-arrow_bottom_fill {right: 10px; font-size: 6px; color: #666;}
    .lang-sel select{position: relative; width: 100%; min-width: 98px; height: 100%; padding-left: 37px; border: #e0e0e0; background: transparent;}

    .btn-grp {display:flex; align-items:center;}
    .btn-grp .btn-guide-grp {margin-right:30px;}
    .btn-grp .btn-guide-grp ul {display:flex; align-items:center;}
    .btn-grp .btn-guide-grp ul li {position:relative;}
    .btn-grp .btn-guide-grp ul li a {position:relative; display:inline-flex; align-items:center; justify-content:center; height: 40px; font-size:14px; font-weight:600; padding:2px 12px 4px;}
    .btn-grp .btn-guide-grp ul li:first-child a {color:#36f}
    .btn-grp .btn-guide-grp ul li:first-child:after {content: ""; width: 1px; height: 14px; background-color: #ccc; position: absolute; top:12px; right: 0;}
    .btn-grp .btn-guide-grp ul li .toggle-label {position: relative; display: inline-block; width: 56px; height: 30px;}
    .btn-grp .btn-guide-grp ul li .toggle-slider {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #f2f4f7; transition: .4s; border-radius: 15px; border: 1px solid #ececec;}
    .btn-grp .btn-guide-grp ul li .toggle-slider:before {position: absolute; content: ""; height: 26px; width: 26px; border-radius: 50%; left: 2px; top: 1px; background-color: #fff; transition: .4s; border: 1px solid #e1e2e3;}
    .btn-grp .btn-guide-grp ul li input:checked + .toggle-slider {background-color: #03c803; border: none;}
    .btn-grp .btn-guide-grp ul li input:checked + .toggle-slider:before {top: 2px; left: 3px; border: none; transform: translateX(24px);}
    .btn-grp .btn-download {border:1px solid #999; width: 40px; height: 40px; padding: 0; color: #76797e; background-color: #ffffff; font-size: 20px; line-height: 40px; border-radius: 3px;}
    
`;

export default ResumeTooltip
