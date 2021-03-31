import { createStore } from 'redux';

import rootReducer from '../reducers'; // importando os reducers

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, extension);

export default store;
