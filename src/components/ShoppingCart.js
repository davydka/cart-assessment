import React from 'react'

import shoppingCartIcon from './shoppingCartIcon'

const ShoppingCart = ({handleCartClicked, count}) => {
  return (
    <div className='shopping-cart'>
      <button className='reset-button' onClick={handleCartClicked}>
        {shoppingCartIcon()} {count ? `${count} item${count !== 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
      </button>
    </div>
  )
}

export default ShoppingCart