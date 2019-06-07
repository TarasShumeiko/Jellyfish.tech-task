import React, { Component } from 'react';
import Name from './components/Name';
import Currencies from './components/Currencies';
import Bitcoin from './components/Bitcoin';

const Screen = {
  NAME: 'NAME',
  CURRENCIES: 'CURRENCIES',
  BITCOIN: 'BITCOIN',
};

class App extends Component {
  state = {
    screen: Screen.NAME,
    name: '',
    currency: ''
  };

  handleChangeName = (event) => {
    const { value } = event.target;
    if (value) {
      this.setState({ name: value });
    }
  };

  handleSubmitName = (event) => {
    event.preventDefault();
    this.setState({ screen: Screen.CURRENCIES });
  };

  handleChangeCurrency = (event) => {
    const { value } = event.target;
    this.setState({ currency: value });
  };

  handleSubmitCurrency = () => {
    this.setState({ screen: Screen.BITCOIN });
  };

  handleChangeScreen = () => {
    this.setState({ screen: Screen.CURRENCIES });
  };

  render() {
    const { screen, name, currency } = this.state;

    switch (screen) {
      case Screen.NAME:
        return (
          <Name
            value={name}
            onChange={this.handleChangeName}
            onSubmit={this.handleSubmitName}
          />
        );

      case Screen.CURRENCIES:
        return (
          <Currencies
            name={name}
            value={currency}
            onChange={this.handleChangeCurrency}
            onSubmit={this.handleSubmitCurrency}
          />
        );

      case Screen.BITCOIN:
        return (
          <Bitcoin
            currency={currency}
            onClick={this.handleChangeScreen}
          />
        );

      default:
        return null;
    }
  }
}

export default App;