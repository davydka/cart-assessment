import React from 'react'

import shoppingCartIcon from './shoppingCartIcon'

const ShoppingCart = props => (
  <div className='shopping-cart'>
    <a href='#'>
      {shoppingCartIcon()} Your cart is empty
    </a>
  </div>
)

export default ShoppingCart