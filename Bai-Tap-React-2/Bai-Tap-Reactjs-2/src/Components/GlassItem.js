import React, { Component } from 'react'

export default class GlassItem extends Component {
  render() {
    let {img, name, price} = this.props
    return (
      <div className='col-3'>
        <div className='card p-3 glass-item-card'>
        <img className='card-img-top' src={img} alt/>
        <div className='card-body'>
            <h4 className='card-tilte'>{name}</h4>
            <p className='card-text'>{price}</p>
        </div>
        </div>
      </div>
    )
  }
}
