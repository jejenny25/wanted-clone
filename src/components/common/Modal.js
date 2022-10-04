import styled from "styled-components"
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { chageModal } from "../../store/reducers/modal";

import {Dimmed} from "../../components/common/styled"

import Login from "../../components/common/Login"
import Join from "../../components/common/Join"
import LoinPW from "../../components/common/LoinPW"

import { ReactComponent as IcoClose } from "../../assets/svg/ico-close.svg";

const Modal = (props) => {
    // 모듈 선언

    // Global State 선언
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

    //Local State 선언
    const [modalTit, setMoalTit] = useState("");


    // store에 접근하여 state 가져오기
    const isActive = useSelector(state => state.modal.active);
    const modalType = useSelector(state => state.modal.modalType);

    // console.log("isActive : " + isActive);
    // console.log("modalType : " + modalType);

    //Life Cycle 선언
    useEffect(() => { 
        if(modalType === "login") {
            setMoalTit("");
        }else if(modalType === "join") {
            setMoalTit("회원가입");
        }
        else if(modalType === "pw") {
            setMoalTit("비밀번호 입력");
        }
    }, []);

    useEffect(() => { 
        if(modalType === "login") {
            setMoalTit("");
        }else if(modalType === "join") {
            setMoalTit("회원가입");
        }
        else if(modalType === "pw") {
            setMoalTit("비밀번호 입력");
        }
    }, [modalType]);
    

    const getModalCont = () => ({
        login: <Login />,
        join: <Join />,
        pw: <LoinPW />,
    });

    const modalClose = () => {
        dispatch(chageModal( {active: false, modalType: 'login' } ));
    };

    return (
        <ModalStyled active={isActive} type={modalType}>
            <div className="modal-wrap">
                <div className="modal-head">
                    <div className="tit-wrap">
                        <h3 className={`tit ${modalType === "login" ? 'icon-logo' : ''}`}>{modalTit}</h3>
                    </div>
                    <button type="button" className="btn btn-close" onClick={modalClose}><IcoClose /></button>
                </div>
                <div className="modal-content">
                    { getModalCont()[modalType] }
                </div>
            </div>
            <Dimmed onClick={modalClose}></Dimmed>
        </ModalStyled>
    )
}

const ModalStyled = styled.div`
    display: ${props=>props.active?'block':'none'};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    overflow: hidden;
    z-index: 1400;
    .modal-wrap::-webkit-scrollbar{display:none}
    .modal-wrap {border-radius: 5px; background-color: #fff; position: absolute; overflow: hidden; top: 50%; left: 50%; width:400px; overflow-y:auto;
    max-width: 500px; max-height: calc(100vh - 150px);transform: translate(-50%,-50%); z-index:400;}
    .modal-wrap .modal-head {position:relative;}
    .tit-wrap .tit {height: 54px; padding: 16px 20px; position: relative; /*border-bottom: 1px solid #ececce;*/ color: #333; text-align: center; font-size: 16px; font-weight: 600;}
    .btn-close {position: absolute; top: 50%; right: 0; transform: translateY(-50%); padding: 15px;}
    .modal-content {padding:20px; padding:${props=>props.type === "join" ? '20px 20px 0 20px':'20px'};}
    
`;

export default Modal