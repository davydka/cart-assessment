import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, showModal } from '../actions'
import { getCartProducts } from '../reducers'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import ShoppingCart from '../components/ShoppingCart'

const ProductsContainer = ({ products, cartProducts, addToCart, showModal }) => {
  const cartCount = cartProducts.reduce((accumulator, item) => {
    return accumulator + item.quantity
  }, 0)

  return (
    <div>
      <div className='header'>
        <h2>Acme Store</h2>
        <ShoppingCart quantityCount={cartCount} itemCount={cartProducts.length} handleCartClicked={() => showModal()} />
      </div>

      <ProductsList>
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
    </div>
  )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  cartProducts: getCartProducts(state)
})

export default connect(
  mapStateToProps,
  { addToCart, showModal }
)(ProductsContainer)
