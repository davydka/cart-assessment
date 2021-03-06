import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, showModal, entirelyRemoveFromCart, removeFromCart, addToCart } from '../../actions'
import { getTotal, getCartProducts, getModalOpen } from '../../reducers'
import Cart from '../../components/Cart'

const Index = ({
  open,
  products,
  total,
  checkout,
  showModal,
  entirelyRemoveFromCart,
  addToCart,
  removeFromCart
}) => (
  <Cart
    handleCartClicked={() => showModal()}
    handleEntirelyRemoveClicked={(id) => entirelyRemoveFromCart(id)}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
    open={open}
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)

Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }),
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  open: getModalOpen(state)
})

export default connect(
  mapStateToProps,
  { checkout, showModal, entirelyRemoveFromCart, addToCart, removeFromCart }
)(Index)
