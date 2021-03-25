import ADD_TO_CART from '../actions/actionTypes';

const INITIAL_STATE = {
  cart: [], // array com os itens
  totalPrice: 0, // preço inicial
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return { // retornando o novo estado(cart, total price)
        cart: [...state.cart, action.product], // pegando o que tinha e add o product(action)
        totalPrice: state.totalPrice + action.product.price, // acessando o price de dentro do product 
      }
    default:
      return state;
  }
}

export default cartReducer; 