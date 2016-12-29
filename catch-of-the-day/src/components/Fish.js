import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt="fish" />
        <h3 className="fish-name">
          {this.props.details.name}
          <span className="price">{formatPrice(this.props.details.price)}</span>
        </h3>
        <p>{this.props.details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

Fish.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToOrder: React.PropTypes.func.isRequired
};

export default Fish;
