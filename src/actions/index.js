import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const showModal = () => dispatch => {
  dispatch({
    type: types.SHOW_MODAL
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const removeFromCart = productId => dispatch => {
  dispatch(removeFromCartUnsafe(productId))
}

const entirelyRemoveFromCartUnsafe = productId => ({
  type: types.ENTIRELY_REMOVE_FROM_CART,
  productId
})

export const entirelyRemoveFromCart = productId => dispatch => {
  dispatch(entirelyRemoveFromCartUnsafe(productId))
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
