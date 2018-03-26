import React, { Component } from 'react';
import './style.css';
import * as PlayersActions from '../../actions/players';
import * as CommandsActions from '../../actions/commands';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(PlayersActions.loadAll());
    this.props.dispatch(CommandsActions.loadAll());
  }

  render() {
    return <section className="App">{this.props.children}</section>;
  }
}

export default connect()(App);