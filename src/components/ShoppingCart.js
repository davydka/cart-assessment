import React from 'react'

import shoppingCartIcon from './shoppingCartIcon'

const ShoppingCart = props => {
  return (
    <div className='shopping-cart'>
      <button className='reset-button' onClick={props.handleCartClicked}>
        {shoppingCartIcon()} Your cart is empty
      </button>
    </div>
  )
}

export default ShoppingCart