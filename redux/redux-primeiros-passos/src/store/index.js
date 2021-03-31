import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers'; // exporta aut do index.js

// Deve-se criar um rootReducer no arquivo src/reducers/index.js .

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// A função createStore sempre receberá como parâmetro um rootReducer . 
const store = createStore(rootReducer, extension);  // importar o reducer                     

export default store;