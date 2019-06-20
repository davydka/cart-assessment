import React from 'react'

import shoppingcart from './shoppingcart.svg'

const ShoppingCart = props => (
  <div className='shopping-cart'><img src={shoppingcart} alt="Shopping Cart Icon"/> Your cart is empty</div>
)

export default ShoppingCart