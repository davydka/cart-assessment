import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const ProductsList = ({ children }) => (
  <div className='product-list'>{children}</div>
)

ProductsList.propTypes = {
  children: PropTypes.node
}

export default ProductsList
