import React, { Component } from 'react';
import './style.css';
import Header from '../../components/Header';
import Main from '../Main/index';


const MENU = [
    {link: '/', label: 'Main'},
    {link: '/leagues', label: 'Leagues'},
    {link: '/commands', label: 'Commands'},
    {link: '/players', label: 'Players'},
];

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          menu: MENU,
          commands: [],
          players: []
      }
    }

    componentWillMount() {
        const root_commands = `http://localhost:3004/commands`;
        const root_players = `http://localhost:3004/players`;

        fetch(root_commands)
            .then(response => response.json())
            .then(data => {
                //console.log('commands', data);
                this.setState({ commands: data })
            });
        fetch(root_players)
            .then(response => response.json())
            .then(data => {
                //console.log('players', data);
                this.setState({ players: data })
            });
    }

    render() {
        return (
          <section className="App">
              <Header items={this.state.menu} />
              <Main commands={this.state.commands} players={this.state.players} />
          </section>
        );
    }
}


export default App;