import React, { Component } from 'react';
import './style.css';
import * as PlayersActions from '../../actions/players';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commands: []
    };
  }

  componentWillMount() {
    const root_commands = `http://localhost:3004/commands`;

    fetch(root_commands)
      .then(response => response.json())
      .then(data => {
        //console.log('commands', data);
        this.setState({ commands: data });
      });

    this.props.dispatch(PlayersActions.loadAll());
  }

  render() {
    return <section className="App">{this.props.children}</section>;
  }
}

export default connect()(App);
