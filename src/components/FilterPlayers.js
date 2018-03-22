import React, { Component } from 'react';
import Players from './Players';
import SearchBar from './SearchBar';
import SelectCommands from './SelectCommands';

class FilterPlayers extends Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.handleCommand = this.handleCommand.bind(this);

    this.state = {
      filterText: '',
      command: 'all'
    };
  }

  handleText(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  handleCommand(command) {
    this.setState({
      command: command
    });
  }

  render() {
    return (
      <section>
        <SearchBar
          onHandleText={this.handleText}
          filterText={this.state.filterText}
        />
        <SelectCommands
          onhandleCommand={this.handleCommand}
          command={this.state.command}
        />
        <Players
          filterText={this.state.filterText}
          command={this.state.command}
        />
      </section>
    );
  }
}

export default FilterPlayers;
