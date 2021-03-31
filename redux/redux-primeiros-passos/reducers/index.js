import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer }); // decorar

export default rootReducer;

/* O método combineReducers que, como diz seu nome, combina reducers , 
deve receber um objeto com os reducers criados. 
Sem ele, só poderíamos usar um reducer em nossa aplicação. */

