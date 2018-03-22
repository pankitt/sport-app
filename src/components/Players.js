import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CommandsList extends Component {
  render() {
    const name = this.props.name;
    const id = this.props.id;
    const position = this.props.position;

    return (
      <li>
        <Link to={`/players/${id}`}>{name}</Link> {position}
      </li>
    );
  }
}

class Players extends Component {
  render() {
    const filterText = this.props.filterText;
    const players = this.props.players;
    const command = this.props.command;
    const playersName = [];

    players.forEach((item, index) => {
      if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (command === 'all') {
        playersName.push(
          <CommandsList key={index} id={item.id} name={item.name} />
        );
      }
      if (command === item.command) {
        playersName.push(
          <CommandsList
            key={index}
            id={item.id}
            name={item.name}
            position={item.position}
          />
        );
      }
    });

    return (
      <section>
        <h3>Players</h3>
        <ul>{playersName}</ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(Players);
