import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string,
  cardDescription: propTypes.string,
  cardAttr1: propTypes.string,
  cardAttr2: propTypes.string,
  cardAttr3: propTypes.string,
  cardImage: propTypes.string,
  cardRare: propTypes.string,
  cardTrunf: propTypes.bool,
}.isRequired;

export default Card;
