import styled from "styled-components"

import { useDispatch } from 'react-redux';
import { changeSearch } from "../../store/reducers/searchInfo";

import {InnerStyled} from "../../components/common/styled"

const SchWord = (props) => {
  // dispatch를 사용하기 위한 준비
  const dispatch = useDispatch();
  
  const openShcBar = () => {
      dispatch(changeSearch( {_isOpen: true, _schWord: 'props.schWord' } ));
  }
  return (
    <SchWordStyled>
        <InnerStyled>
            <button type="button" className="btn-search" onClick={openShcBar}>{props.schWord}</button>
        </InnerStyled>
    </SchWordStyled>
  )
}

const SchWordStyled = styled.div`
    position:relative;
    width: 100%;
    height: 160px;
    background: #fff;
    border-bottom: 1px solid #e1e2e3;
    z-index: 1;
    .btn-search {position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); max-width: 90%; font-size: 48px; line-height: 2; color: #333; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
`;

export default SchWord