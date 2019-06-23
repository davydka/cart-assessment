import React from 'react'
import PropTypes from 'prop-types'
import shoppingButtonAdd from './shoppingButtonAdd'
import shoppingButtonDelete from './shoppingButtonDelete'

const Product = ({ price, inventory, showingInCart, title, quantity, children }) => {
  return (
    <div>
      <div className='product'>
        <div className='img-holder'>
          <img src={`./assets/images/${title.toLowerCase()}.png`} alt={title}/>
        </div>

        <div className='holder'>
          <div className='title-price'>
            <h4 className='title'>{title}</h4> <div className='price'>&#36;{price}</div>
          </div>
          {showingInCart &&
          <button className='reset-button sub remove'>Remove</button>
          }
          {!showingInCart &&
          <div className='inventory sub'>{inventory ? ` ${inventory} remaining` : 'sold out'}</div>
          }
          {children}
        </div>
      </div>
      {showingInCart &&
      <div className='button-group cart-button-group'>
        <button className='reset-button'>
          {shoppingButtonDelete()}
        </button>

        <button className='reset-button center'>
          {quantity}
        </button>

        <button
          className='reset-button'
          disabled={!inventory}>
          {shoppingButtonAdd()}
        </button>
      </div>
      }
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  showingInCart: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Product
