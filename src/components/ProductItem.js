import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Product
    showingInCart={false}
    title={product.title}
    price={product.price}
    inventory={product.inventory}>
    <button
      className='add-to-cart'
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      Add to cart
    </button>
  </Product>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
