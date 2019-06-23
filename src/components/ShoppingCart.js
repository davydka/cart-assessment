import React from 'react'
import PropTypes from 'prop-types'

import shoppingCartIcon from './shoppingCartIcon'

const ShoppingCart = ({handleCartClicked, quantityCount, itemCount}) => {
  return (
    <div className='shopping-cart'>
      <button className='reset-button' onClick={handleCartClicked}>
        {shoppingCartIcon()}
        {itemCount ?
          `${itemCount} product${itemCount !== 1 ? 's' : ''} : 
          ${quantityCount} quantity`
          : 'Your cart is empty'}
      </button>
    </div>
  )
}

ShoppingCart.propTypes = {
  handleCartClicked: PropTypes.func,
  quantityCount: PropTypes.number,
  itemCount: PropTypes.number
}


export default ShoppingCart