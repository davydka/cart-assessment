import React from 'react'
import PropTypes from 'prop-types'
import shoppingButtonAdd from '../svg/shoppingButtonAdd'
import shoppingButtonDelete from '../svg/shoppingButtonDelete'

import './styles.scss'

class Product extends React.Component {
  constructor(props) {
    super(props);


    this.canvas = null;
    this.sandbox = null;
  }

  componentDidMount() {
    fetch(`./assets/images/${this.props.title.toLowerCase()}.png`).then((response) => {
      if(response.ok) {
        return response.blob()
      }
      throw new Error('Network response was not ok.')
    }).then((myBlob) => {
      const objectURL = URL.createObjectURL(myBlob)
      this.canvas = document.querySelector(`.canvas${this.props.id}`)
      this.sandbox = new window.GlslCanvas(this.canvas)
      this.sandbox.setUniform('u_tex0',objectURL)
    }).catch((error) => {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }

  render() {
    const {
      id,
      price,
      inventory,
      showingInCart,
      handleEntirelyRemoveClicked,
      onAddToCartClicked,
      onRemoveFromCartClicked,
      title,
      quantity,
      children
    } = this.props

    return (
      <div>
        <div className='product'>
          <div className='img-holder'>
            <canvas
              className={`glsl canvas${id}`}
              ref={this.glsl}
              data-fragment-url="frag.frag">
            </canvas>
            <img src={`./assets/images/${title.toLowerCase()}.png`} alt={title}/>
          </div>

          <div className='holder'>
            <div className='title-price'>
              <h4 className='title'>{title}</h4>
              <div className='price'>&#36;{price}</div>
            </div>
            {showingInCart &&
            <button className='reset-button sub remove' onClick={handleEntirelyRemoveClicked}>Remove</button>
            }
            {!showingInCart &&
            <div className='inventory sub'>{inventory ? ` ${inventory} remaining` : 'sold out'}</div>
            }
            {children}
          </div>
        </div>
        {showingInCart &&
        <div className='button-group cart-button-group'>
          <button
            className='reset-button'
            onClick={onRemoveFromCartClicked}
            disabled={!quantity}>
            {shoppingButtonDelete()}
          </button>

          <button className='reset-button center'>
            {quantity}
          </button>

          <button
            className='reset-button'
            onClick={onAddToCartClicked}
            disabled={!inventory}>
            {shoppingButtonAdd()}
          </button>
        </div>
        }
      </div>
    )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  quantity: PropTypes.number,
  handleEntirelyRemoveClicked: PropTypes.func,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func,
  showingInCart: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Product
