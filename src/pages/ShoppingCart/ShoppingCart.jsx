import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  renderProducts = () => {
    const { cart, addToCart, decreaseQuantity } = this.props;
    if (cart.length > 0) {
      return cart.map(({ title, quantity, thumbnail, id }) => (
        <div key={ title }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => addToCart({ title, thumbnail, id, quantity }) }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => decreaseQuantity(id) }
          >
            -
          </button>
        </div>
      ));
    }

    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  };

  render() {
    return <>{this.renderProducts()}</>;
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
