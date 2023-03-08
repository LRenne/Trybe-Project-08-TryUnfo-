import React, { Component } from 'react';
import propTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Name
            <input
              type="text"
              name="cardName"
              id="name-input"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Description
            <input
              type="textArea"
              name="cardDescription"
              id="description-input"
              data-testid="description-input"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1-input">
            Card Attribute 01
            <input
              type="number"
              name="cardAttr1"
              id="attr1-input"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
            />
          </label>

          <label htmlFor="attr2-input">
            Card Attribute 02
            <input
              type="number"
              name="cardAttr2"
              id="attr2-input"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
            />
          </label>

          <label htmlFor="attr3-input">
            Card Attribute 03
            <input
              type="number"
              name="cardAttr3"
              id="attr3-input"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
            />
          </label>
          <p>
            Soma de attributos:
            { Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) }
          </p>
          <label htmlFor="image-input">
            Card Image
            <input
              type="text"
              name="cardImage"
              id="image-input"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Rarity
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Trunfo
            {!hasTrunfo && <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />}
            { hasTrunfo && <span>Você já tem um Super Trunfo em seu baralho</span>}
          </label>

          <button
            type="submit"
            name="isSaveButtonDisabled"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salve!!
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string,
  cardDescription: propTypes.string,
  cardAttr1: propTypes.string,
  cardAttr2: propTypes.string,
  cardAttr3: propTypes.string,
  cardImage: propTypes.string,
  cardRare: propTypes.string,
  cardTrunfo: propTypes.bool,
  hasTrunfo: propTypes.bool,
  isSaveButtonDisabled: propTypes.bool,
  onInputChange: propTypes.func,
  onSaveButtonClick: propTypes.func,
  min: propTypes.string,
}.isRequired;

export default Form;
