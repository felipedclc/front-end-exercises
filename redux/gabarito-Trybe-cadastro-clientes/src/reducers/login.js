// import LOGIN from '../actions/actionsTypes';

const initial_state = {};

const loginReducer = (state = initial_state, action) => {
  switch(action.type) {
    case 'LOGIN':
       return action.value; 
    default:
      return state;
  }
}

export default loginReducer;
