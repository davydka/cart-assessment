import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import shoppingCartIcon from './shoppingCartIcon'
import shoppingCartClose from './shoppingCartClose.svg'

const Cart  = ({ open, handleCartClicked, products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  if(!open) {
    return null;
  }
  return (
    <div id='cart'>
      <div className='content'>
        <button className='reset-button close-cart-button' onClick={handleCartClicked}>
          <img src={shoppingCartClose} alt='Close Shopping Cart'/>
        </button>

        <h3>Your cart</h3>
        {hasProducts &&
          <div>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button>
          </div>
        }

        {!hasProducts &&
          <div className='cart-empty'>
            {shoppingCartIcon()}
            <div className='sub'>
              <p>Please add some products<br/> to your cart.</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  handleCartClicked: PropTypes.func,
  open: PropTypes.bool
}

export default Cart
