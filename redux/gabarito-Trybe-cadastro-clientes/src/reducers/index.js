import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './addRegister';

const rootReducers = combineReducers({ loginReducer, registerReducer });

export default rootReducers;