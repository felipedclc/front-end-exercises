import React from 'react';
import products from '../products';
import { addToCart } from '../actions/cartActions';
import { connect } from 'react-redux';

class ProductList extends React.Component {
  validateQuantity = (product, cart, add) => { // usando de parametro para acessar
    const productsInCart = cart.filter(item => item.name === product.name); // array do produto selecionado
    if (productsInCart.length <= product.stockQuantity) { // se o comprimento do novo array for 
      add(product) // adicionando ao carrinho
    }
  }

  render() {
    const { add, cart } = this.props;
    return (
      <div>
        <h2>Produtos disponíveis</h2>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>R${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.validateQuantity(product, cart, add) }>
                    Adicionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// acessando estado o carrinho da store
const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
})

// retorna uma função para add ao carrinho, 
const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch(addToCart(product)),
 // add = props     despacha uma ação(addToCart)
 // dispatch altera o estado da store
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList); 
