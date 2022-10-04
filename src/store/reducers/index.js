import { combineReducers } from 'redux';
import modal from './modal';
import loginInfo from './loginInfo';
import searchInfo from './searchInfo'

const rootReducer = combineReducers({
  modal,
  loginInfo,
  searchInfo
});

export default rootReducer;