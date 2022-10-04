
//액션
export const SEARCH = "SEARCH";

export const changeSearch = data => ({ 
    type: SEARCH, 
    data 
});


// state의 초기값
const initState ={
    isOpen:false,
    schWord:"",
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
const searchInfo = (state = initState, action) =>{
    switch(action.type){
        case SEARCH :
            return{
                ...state, // 불변성 유지
                isOpen:action.data._isOpen, // 변경할 state 값
                schWord:action.data._schWord,
            };
        //기본값
        default:
            return state;
    }
}

export default searchInfo;