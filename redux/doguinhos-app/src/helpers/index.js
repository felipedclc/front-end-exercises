import React from 'react';
import { Provider } from "react-redux"
import { render } from '@testing-library/react';
import App from "../App"
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const createMockStore = createStore(combineReducers({ reducer }), applyMiddleware(thunk))

const renderWithRedux = (component) => {
    const mockStore = createMockStore();
    return { ...render(<Provider store={store}>{ component }</Provider>), mockStore }
}

export default renderWithRedux;