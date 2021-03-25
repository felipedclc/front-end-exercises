import { combineReducers } from 'redux';

import cartReducer from './cartReducer'; // importando os reducers

const rootReducer = combineReducers({ cartReducer }); // colocando os reducers no root

export default rootReducer;
