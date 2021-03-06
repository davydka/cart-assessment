import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ENTIRELY_REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  SHOW_MODAL
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  showModal: false,
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]

    case ENTIRELY_REMOVE_FROM_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state.filter(id => id !== action.productId)
      }
      return state

    default:
      return state
  }
}

const showModal = (state = initialState.showModal, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return !state
    default:
      return state
  }
}

export const getShowModal = state => state.showModal

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case ENTIRELY_REMOVE_FROM_CART:
      const targetId = action.productId
      const { [targetId]:value, ...targetState } = state
      return targetState
    case REMOVE_FROM_CART:
      const targetQuantity = state[action.productId] - 1
      return { ...state,
        [action.productId]: targetQuantity
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        showModal: showModal(state.showModal, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
