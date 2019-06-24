import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import shoppingCartIcon from './shoppingCartIcon'
import shoppingCartClose from './shoppingCartClose.svg'

class Cart  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dirty: false,
      tempQuantities:{
        1: {count: 0},
        2: {count: 0},
        3: {count: 0}
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.open !== this.props.open){
      this.resetState()
    }
  }

  resetState = () => {
    this.setState({
      dirty: false,
      tempQuantities:{
        1: {count: 0},
        2: {count: 0},
        3: {count: 0}
      }
    })
  }

  render() {
    const {
      open,
      handleCartClicked,
      handleEntirelyRemoveClicked,
      addToCart,
      removeFromCart,
      products,
      total,
      onCheckoutClicked
    } = this.props
    const taxAmount = 0.0875
    const tax = (total * taxAmount).toFixed(2)
    const grandTotal = (parseFloat(total) + parseFloat(tax)).toFixed(2)

    const handleAddClick = (product) => {
      this.setState(state => {
        state.dirty = true
        state.tempQuantities[product.id].count++
        return state
      })
    }

    const handleRemoveClick = (product) => {
      this.setState(state => {
        state.dirty = true
        state.tempQuantities[product.id].count--
        return state
      })
    }

    const handleUpdateClick = () => {
      products.map(product => {
        const adjust = this.state.tempQuantities[product.id].count
        if(adjust > 0){
          let i = 0;
          while(i < adjust) {
            addToCart(product.id)
            i++;
          }
        }

        if(adjust < 0){
          let i = 0;
          while(i < Math.abs(adjust)) {
            removeFromCart(product.id)
            i++;
          }
        }
        return true
      })
      this.resetState()
    }

    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product => {
          const adjust = this.state.tempQuantities[product.id].count
          const quantity = product.quantity + adjust
          const inventory = product.inventory - adjust
          return (
            <Product
              handleEntirelyRemoveClicked={() => handleEntirelyRemoveClicked(product.id)}
              onAddToCartClicked={() => handleAddClick(product)}
              onRemoveFromCartClicked={() => handleRemoveClick(product)}
              showingInCart={true}
              title={product.productTitle}
              price={product.price.value}
              quantity={quantity}
              inventory={inventory}
              key={product.id}
            />
          )
        }
      )
    ) : (
      <em>Please add some products to cart.</em>
    )

    if (!open) {
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
              disabled={!this.state.dirty}
              onClick={handleUpdateClick}>
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
