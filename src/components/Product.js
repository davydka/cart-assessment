import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, children }) => (
  <div className='product'>
    <img src="./assets/images/61fd43ac9f4654719f2cf868dafd671433b65168.png" alt={title}/>

    <div className="holder">
      {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
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
