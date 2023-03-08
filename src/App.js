import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardDeck: [],
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.filledForm);
  };

  filledForm = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attrlimit = 90;
    const attrTotalLimite = 210;
    const sumAttr = Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3);

    const fillingConditions = [
      cardName.length > 0,
      cardDescription.length > 0,
      cardImage.length > 0,
      cardRare.length > 0,
      cardAttr1 !== '',
      cardAttr2 !== '',
      cardAttr3 !== '',
      Number(cardAttr1) <= attrlimit,
      Number(cardAttr1) >= 0,
      Number(cardAttr2) <= attrlimit,
      Number(cardAttr2) >= 0,
      Number(cardAttr3) <= attrlimit,
      Number(cardAttr3) >= 0,
      sumAttr <= attrTotalLimite,
    ].every(Boolean);
    this.setState({ isSaveButtonDisabled: !fillingConditions });
  };

  onSaveButtonClick =(event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const { cardDeck } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState({
      cardDeck: [...cardDeck, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

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
      cardDeck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          className="formClass"
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          {cardDeck.map((card) => (<Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />))}
        </div>
      </div>
    );
  }
}

export default App;
