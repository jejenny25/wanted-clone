import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../../store/reducers/searchInfo";

import { ReactComponent as IcoSch } from "../../assets/svg/ico-sch.svg";
import { ReactComponent as IcoClose } from "../../assets/svg/ico-close.svg";
import { ReactComponent as IcoArr4 } from "../../assets/svg/ico-arr4.svg";

import {InnerStyled, Dimmed} from "../../components/common/styled"

const SearchBar = (props) => {
    // 모듈 선언

    // Global State 선언

    //Local State 선언
    const navigate = useNavigate();
    const isActiveSch = useSelector(state => state.searchInfo.isOpen);
    
    const [searchWord, setSearchWord] = useState("");
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    const goSearch = (e) => {
        if(e.key === 'Enter'){
            if(searchWord === ""){
                alert("검색어를 입력해주세요.");
            }else{
                navigate('/schResult');
                dispatch(changeSearch( {_isOpen: false, _schWord: searchWord } ));
            }
        }
    }

    const schClose = () => {
        dispatch(changeSearch( {_isOpen: false, _schWord: searchWord } ));
    }

  return (
    <SearchBarStyled active={isActiveSch}>
        <div className="sch-bar-wrap">
            <InnerStyled>
                <div className="sch-wrap">
                    <div className="sch-inp-wrap">
                        <span className="ico"><IcoSch /></span>
                        <input type="search" placeholder="#태그, 회사, 포지션 검색" className="inp-sch" onChange={(e) => setSearchWord(e.target.value)} onKeyPress={goSearch}/>
                        <button type="button" className="btn-close" onClick={props.schClose}><IcoClose /></button>
                    </div>
                </div>
                <div className="sch-info-wrap">
                    <div className="info-item">
                        <div className="tit-wrap">
                            <p className="tit">추천태그로 검색해보세요</p>
                            <Link to="#">기업태그 홈 이동하기<IcoArr4 /></Link>
                        </div>
                        <div className="tag-wrap">
                            <ul>
                                <li><button type="button" className="btn-tag">#전문연구요원</button></li>
                                <li><button type="button" className="btn-tag">#복지포인트</button></li>
                                <li><button type="button" className="btn-tag">#연봉2~5%</button></li>
                                <li><button type="button" className="btn-tag">#반려동물</button></li>
                                <li><button type="button" className="btn-tag">#퇴사율5%이하</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </InnerStyled>
        </div>
        <Dimmed onClick={schClose}/>
    </SearchBarStyled>
  )
}

const SearchBarStyled = styled.div`
    display:${props=>props.active?'block':'none'};
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 400;
    .sch-bar-wrap{left: 0; top: 0; width: 100%; position: absolute; background: #fff; z-index:400;}
    .sch-wrap {width: 100%; padding: 30px 0 0; position: relative; background-color: #fff; }
    .sch-inp-wrap {position:relative;}
    .sch-inp-wrap .inp-sch {height: 50px; line-height: 50px; width: 100%; margin: 0; padding: 0 36px 0 60px; border: 1px solid #f2f4f7; border-radius: 25px; font-size: 16px; font-weight: 400; color: #767676; background-color: #f2f4f7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sch-inp-wrap .inp-sch:focus {border: 1px solid #36f;color: #333; background-color: #fff;}
    .sch-inp-wrap .ico {position: absolute; top: 26px; left: 20px; transform: translateY(-50%); color: #939393; width: 18px; height: 18px; margin: 0 16px 0 6px;}
    .sch-inp-wrap .btn-close {display:block; position: absolute; font-size: 12px; right: 0; top: 0; width: 50px; height: 50px; color: #999; padding: 15px;} /*opacity:0; visibility:hidden;*/
    .sch-inp-wrap .btn-close svg {width:20px; height:20px;}
    /* .sch-inp-wrap .inp-sch:focus + .btn-close {display:block; opacity:1; visibility:visible;} */

    .sch-info-wrap {padding:50px 0;}
    .info-item .tit-wrap {display:flex; align-items:center; justify-content:space-between;}
    .info-item .tit-wrap .tit {line-height: 20px; font-weight: 600; color: #333;}
    .info-item .tit-wrap a {font-size: 14px; font-weight: 400; line-height: 20px; color: #767676;}
    .info-item .tit-wrap a svg {position:relative; top:1px; margin-left:2px; }
    .info-item  .tag-wrap {margin-top:20px}
    .info-item  .tag-wrap .btn-tag {height: 50px; line-height: 50px; font-size: 15px; font-weight: 400; color: #333; padding: 0 26px; background-color: #f3f5f8; border-radius: 25px;}
    .info-item  .tag-wrap ul {display:flex; align-items:center;}
    .info-item  .tag-wrap ul li + li  {margin-left:10px;}
    .info-item  .tag-wrap ul li:nth-of-type(5n+1) .btn-tag {background: #f0f8f8;}
    .info-item  .tag-wrap ul li:nth-of-type(5n+2) .btn-tag {background: #eeedf4;}
    .info-item  .tag-wrap ul li:nth-of-type(5n+3) .btn-tag {background: #e8edf3;}
    .info-item  .tag-wrap ul li:nth-of-type(5n+4) .btn-tag {background: #e9f4fb;}
    .info-item  .tag-wrap ul li:nth-of-type(5n+5) .btn-tag {background: #effbf3;}
`;

export default SearchBar