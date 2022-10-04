
//액션
export const ACTIVE = "ACTIVE";

export const chageModal = data => ({ 
    type: ACTIVE, 
    data 
});


// state의 초기값
const initState ={
    active:false,
    modalType:"login",
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
const modal = (state = initState, action) =>{
    switch(action.type){
        case ACTIVE :
            return{
                ...state, // 불변성 유지
                active:action.data.active, // 변경할 state 값
                modalType:action.data.modalType
            };
        //기본값
        default:
            return state;
    }
}

export default modal;