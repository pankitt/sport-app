import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCommands extends Component {
  constructor(props) {
    super(props);
    this.handleCommand = this.handleCommand.bind(this);
  }

  handleCommand(e) {
    this.props.onhandleCommand(e.target.value);
  }

  render() {
    const players = this.props.players;
    const filterUnique = [];
    const leagues = [];

    players.forEach((item, index) => {
      if (filterUnique.indexOf(item.command) !== -1) {
        return;
      }

      leagues.push(
        <option key={index} value={item.command}>
          {item.command}
        </option>
      );

      filterUnique.push(item.command);
    });

    return (
      <div>
        <label>
          Select Command:
          <select value={this.props.command} onChange={this.handleCommand}>
            <option value="all">all</option>
            {leagues}
          </select>
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(SelectCommands);
