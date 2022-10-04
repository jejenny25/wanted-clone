import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
// import {  legacy_createStore as createStore } from "redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/";
import { composeWithDevTools } from "redux-devtools-extension";

// store 생성(reducer,devtools 연결)
const store =  createStore(rootReducer); // 스토어를 만듭니다.
//console.log("store state : " + store.getState()); // 스토어의 상태를 확인해봅시다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // store 연결
    <Provider store={store}> 
        <App />
    </Provider>,
);

