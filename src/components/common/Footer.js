import styled from "styled-components"
import {Link} from "react-router-dom"
import {InnerStyled} from "./styled"

import { ReactComponent as IcoKR } from "../../assets/svg/ico-KR.svg";

const Footer = () => {
	return (
		<FooterStyled>
			<InnerStyled>
				<div className="top-area">
					<div className="left-wrap">
						<div className="logo"><img src="images/wanted_logo.png" alt="" /></div>
						<ul className="link-list">
							<li>
								<Link to="#">기업소개</Link>
							</li>
							<li>
								<Link to="#">이용약관</Link>
							</li>
							<li>
								<Link to="#">개인정보 처리방침</Link>
							</li>
							<li>
								<Link to="#">고객센터</Link>
							</li>
						</ul>
					</div>

					<div className="right-wrap">
						<ul className="sns-list">
							<li>
								<Link to="#"><img src="images/sns-ig.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-youtube.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-facebook.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-blog.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-kakao.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-post.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-apple.png" alt="" /></Link>
							</li>
							<li>
								<Link to="#"><img src="images/sns-google.png" alt="" /></Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="bot-area">
					<p className="copyright">(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147<br />유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br />© Wantedlab, Inc.</p>
					<div className="selct-wrap">
						<div className="img"><IcoKR /></div>
						<select name="" id="" className="select-lan">
							<option value="kor" className="item item-kor">한국(한국어)</option>
						</select>
						<i className="icon-arrow_bottom_fill"></i>
					</div>
				</div>
			</InnerStyled>
		</FooterStyled>
	)
}

const FooterStyled = styled.div`
	padding: 18px 0 65px;
    background-color: #fff;
    border-top: 1px solid #ececec;
	.top-area {display:flex; margin-bottom:18px; align-items:center; justify-content:space-between;}
	.top-area .logo {margin-right:50px;}
	.top-area .left-wrap {display:flex; align-items:center; justify-content:space-between;}
	.top-area .left-wrap .link-list {display:flex; align-items:center; justify-content:space-between;}
	.top-area .left-wrap .link-list li + li {margin-left:45px;}
	.top-area .right-wrap .sns-list {display:flex; align-items:center; justify-content:space-between;}
	.top-area .right-wrap .sns-list li + li {margin-left: 14px;}
	
	.bot-area {display:flex; padding-top: 25px; border-top:1px solid #ececec; align-items:center; justify-content:space-between;}
	.bot-area .copyright {font-size: 12px; font-weight: 500; font-size: 12px; font-weight: 500; line-height: 1.6666666667em; color: #767676; width: calc(100% - 290px); margin-right: 40px;}
	.bot-area .selct-wrap {position:relative; width: 250px; height: 36px;}
	.bot-area .selct-wrap .img {position: absolute; left: 15px; top: 55%; -webkit-transform: translateY(-50%); transform: translateY(-50%); width: 24px; height: 17px; z-index: 1;}
	.bot-area .selct-wrap .select-lan {width: 100%; height: 40px; background: #f2f4f7; border-radius: 5px; border: none; font-size: 14px; line-height: 2.1; color: #717171; padding: 0 45px;}
	.bot-area .selct-wrap i {position: absolute; width: 10px; height: 10px; font-size: 10px; line-height: 1.6; right: 15px; top: 50%;  transform: translateY(-50%); color: #717171;}
`

export default Footer