import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import game from './headTailGame';

class App extends Component {
  state = {
    dealer: '',
    head: '',
    tail: '',
    balance: '',
    address: '',
    value: '',
    message: ''
  };

  async componentDidMount() {
    const dealer = await game.methods.dealer().call();
    const head = await game.methods.head().account;
    const tail = await game.methods.tail().account;
    const balance = await web3.eth.getBalance(game.options.address);

    this.setState({ dealer, head, tail, balance });
  }

  enterHead = async event => {
    event.preventDefault();

    this.setState({ message: 'Waiting on transaction success...' });

    await game.methods.enterHead().send({
      from: this.state.address,
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' });
  };

  enterTail = async event => {
    event.preventDefault();

    this.setState({ message: 'Waiting on transaction success...' });

    await game.methods.enterTail().send({
      from: this.state.address,
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' });
  };

  pickWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await game.methods.pickWinner().send({
      from: this.state.dealer
    });

    this.setState({ message: 'A winner has been picked!' });
  };

  render() {
    return (
      <div>
        <h2>Head-Tail Game Contract</h2>
        <p>
          This contract is managed by {this.state.dealer}. 
        </p>

        <p>
          Head player: { this.state.head }{' not registered yet '}. 
        </p>

        <p>
          Tail player: { this.state.tail }{' not registered yet '}. 
        </p>

        <hr />

        <h4>Want to try your luck?</h4>
          <div>
            <p>
            <label> Your address: </label>
            <input
              value={this.state.address}
              onChange={event => this.setState({ address: event.target.value })}
            />
            </p>
            <p>
            <label> Amount of ether to enter: </label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            </p>
          </div>
        <button onClick={this.enterHead}>Head!</button>
        <button onClick={this.enterTail}>Tail!</button>

        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.pickWinner}>Pick a winner!</button>
        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;