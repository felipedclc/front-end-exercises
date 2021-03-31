/* const ADD_REGISTER = 'ADD_REGISTER';
const LOGIN = 'LOGIN'; */

const addRegister = (value) => ({
    type: 'ADD_REGISTER',
    data: value,
});

const login = (value) => ({
    type: 'LOGIN',
    value,
});

export { addRegister, login }
