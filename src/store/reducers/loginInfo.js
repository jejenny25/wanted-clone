
//액션
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const chageLogin = data => ({ 
    type: LOGIN, 
    data 
});


// state의 초기값
const initState ={
    isLogin:false,
    userNM:"",
    userID:"",
    profilePic:"",
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
const loginInfo = (state = initState, action) =>{
    switch(action.type){
        case LOGIN :
            return{
                ...state, // 불변성 유지
                isLogin:action.data._isLogin, // 변경할 state 값
                userNM:action.data._userNM,
                userID:action.data._userID,
                profilePic:action.data._profilePic,
            };
        case LOGOUT :
            return{
                ...state, // 불변성 유지
                isLogin:false, // 변경할 state 값
                userNM:"",
                userID:"",
                profilePic:""
            };
        //기본값
        default:
            return state;
    }
}

export default loginInfo;