import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, children }) => (
  <div className='product'>
    <div className="img-holder">
      <img src='./assets/images/61fd43ac9f4654719f2cf868dafd671433b65168.png' alt={title}/>
    </div>

    <div className='holder'>
      <div className='title-price'>
        <h4 className='title'>{title}</h4> <div className='price'>&#36;{price}</div>
      </div>
      <div className='inventory sub'>{inventory ? ` ${inventory} remaining` : 'sold out'}</div>
      {children}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Product
