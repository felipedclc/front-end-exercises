import ADD_REGISTER from '../actions/actionsTypes';

const initial_state = [];

const addRegister = (state = initial_state, action) => {
    switch(action.type) {
        case ADD_REGISTER:
            return [...state, action.data] // adicionando no array de registros
        default:
            return state;
    }
}

export default addRegister;
