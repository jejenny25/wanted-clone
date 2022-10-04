import styled from "styled-components";

import {Link} from "react-router-dom";

const ResumeList = () => {
  return (
    <ResumeListView>
        <ul className="list">
            <li className="item item-new">
                <Link to="/resumeInput" >
                    <div className="ico"><i className="icon-new_resume"></i></div>
                    <p className="link-name">새 이력서 작성</p>
                </Link>
            </li>
            <li className="item item-file">
                <input type="file" id="file01"/>
                <label htmlFor="file01" >
                    <div className="ico"><i className="icon-upload_resume"></i></div>
                    <p className="link-name">파일 업로드</p>
                </label>
            </li>
            <li className="item item-mod">
                <Link to="/resumeInput" >
                    <div className="txt-wrap">
                        <p className="tit">새 이력서 1</p>
                        <p className="date">2022.09.23</p>
                    </div>
                </Link>
                <div className="resume-info">
                    <p className="lang">한</p>
                    <span className="writing">작성 중</span>
                    <button type="button" className="btn"><i className="icon-more_vert"></i></button>
                </div>
            </li>
            <li className="item item-mod complt">
                <Link to="/resumeInput" >
                    <div className="txt-wrap">
                        <p className="tit">작성완료</p>
                        <p className="date">2022.09.23</p>
                    </div>
                </Link>
                <div className="resume-info">
                    <p className="ico-complt"><i className="icon-joblist_bottombar_cv"></i></p>
                    <span className="writing">작성 완료</span>
                    <button type="button" className="btn"><i className="icon-more_vert"></i></button>
                </div>
            </li>
        </ul>
    </ResumeListView>
  )
}

const ResumeListView = styled.div`
    .list {display:grid;  width:100%; grid-template-columns: repeat(4, 1fr); grid-gap:20px;}
    .list .item {position:relative; height: 190px; border:1px solid #dbdbdb; background-color:#fff;}
    .list .item.item-new a,
    .list .item.item-file label {display:flex; height:100%; flex-direction:column; justify-content:center; align-items:center;}
    .list .item .ico {width: 74px; height: 74px; display:flex; justify-content:center; align-items:center; margin: 0 auto; border-radius: 50%; align-items: center; justify-content:center; font-size: 26px;}
    .list .item.item-new .ico {background-color: #36f; color: #fff;}
    .list .item .link-name {font-size: 16px; font-weight: 600; text-align: center; color: #333; margin: 20px 0 0;}
    .list .item input[type='file'] {display:block; position:absolute; top:0; left:0; width:100%; height:100%; opacity:0;}
    .list .item.item-file .ico {background-color: #e1e2e3; color: #666;}
    .list .item .txt-wrap {padding:6px 20px; margin-top:15px;}
    .list .item .txt-wrap .tit { font-size: 18px; font-weight: 600; line-height: 1.33; max-height: 46px;}
    .list .item .txt-wrap .date {color: #999; margin-top: 5px;}
    .list .item.item-mod {color:#999;}
    .list .item.complt {color:#333;}

    .list .item .resume-info {position: absolute; bottom: 0; height: 41px; width: 100%; display: flex; padding: 0 12px 0 20px; align-items: center; border-top: 1px solid #e0e0e0;}
    .list .item .resume-info .lang {width: 20px; height: 20px; border-radius: 2px; font-size: 12px; font-weight: 600; margin-right: 10px; border:1px solid #999; line-height: 20px; text-align:center;}
    .list .item .resume-info .ico-complt {display:flex; font-size: 16px; width:20px; height:20px; margin-right:8px; align-items:center; justify-content:center;}
    .list .item .resume-info .writing {font-size: 16px;font-weight: 600; line-height: 20px;}
    .list .item .resume-info .btn {display:flex; width:24px; height:24px; margin-left:auto; font-size: 24px; color: #76797e;}
    
`;

export default ResumeList