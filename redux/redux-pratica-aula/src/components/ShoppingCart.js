import React from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
  render() {
    const { products, totalPrice } = this.props;
    return (
      <div>
        <h2>Carrinho de compras</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
        <div>Total: R${totalPrice.toFixed(2)}</div>
      </div>
    );
  }
}

// retorna um objeto(lista de produtos, preço total)
const mapStateToProps = (state) => ({
  products: state.cartReducer.cart, // pegando o carrinho do reducer
  totalPrice: state.cartReducer.totalPrice, // acessando o totalPrice do reducer
})

export default connect(mapStateToProps)(ShoppingCart);