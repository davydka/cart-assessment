import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import shoppingCartIcon from './shoppingCartIcon'
import shoppingCartClose from './shoppingCartClose.svg'

const Cart  = ({
  open,
  handleCartClicked,
  handleEntirelyRemoveClicked,
  addToCart,
  removeFromCart,
  products,
  total,
  onCheckoutClicked
}) => {
  const taxAmount = 0.0875
  const tax = (total * taxAmount).toFixed(2)
  const grandTotal = parseFloat(total) + parseFloat(tax)

  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product => {
      return (
          <Product
            handleEntirelyRemoveClicked={() => handleEntirelyRemoveClicked(product.id)}
            onAddToCartClicked={() => addToCart(product.id)}
            onRemoveFromCartClicked={() => removeFromCart(product.id)}
            showingInCart={true}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            inventory={product.inventory}
            key={product.id}
          />
        )
      }
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  if(!open) {
    return null
  }
  return (
    <div id='cart'>
      <div className='content'>
        <button className='reset-button close-cart-button' onClick={handleCartClicked}>
          <img src={shoppingCartClose} alt='Close Shopping Cart'/>
        </button>

        <h3>Your cart</h3>
        {hasProducts &&
          <div className='cart-items'>
            <div className='items-container'>{nodes}</div>

            <div className='price-row'>
              <div className='column'>Subtotal:</div>
              <div className='column'>&#36;{total}</div>
            </div>

            <div className='price-row divider'>
              <div className='column'>Tax:</div>
              <div className='column'>&#36;{tax}</div>
            </div>

            <div className='price-row'>
              <div className='column'>Total:</div>
              <div className='column'>&#36;{grandTotal}</div>
            </div>

            <button
              className='reset-button update'
              onClick={onCheckoutClicked}>
              Update
            </button>

            <button
              className='reset-button checkout'
              onClick={onCheckoutClicked}>
              CHECKOUT
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
  handleEntirelyRemoveClicked: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  onCheckoutClicked: PropTypes.func,
  handleCartClicked: PropTypes.func,
  open: PropTypes.bool
}

export default Cart
