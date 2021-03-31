const INITIAL_STATE = {
    state: '',
  };
  
  function myReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'NEW_ACTION': // action name
        return { state: action.state };
      default:
        return state;
    }
  }
  
  export default myReducer;

// Primeiro, definimos um estado inicial para nosso reducer;
// Um reducer deve receber como parâmetro um estado e uma ação;

// A ação, por convenção, deve ser um objeto e possuir a key type . 
// É essa key que define como o reducer vai manipular o estado.

// Então combinamos os reducers dentro do arquivo contendo o rootReducer.