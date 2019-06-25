import React from 'react'
import PropTypes from 'prop-types'
import Product from '../Product'

import './styles.scss'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Product
    showingInCart={false}
    id={product.id}
    title={product.productTitle}
    price={product.price.value}
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
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }),
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
