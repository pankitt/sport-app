import React, { Component } from 'react';
import Commands from './Commands';
import SearchBar from './SearchBar';
import SelectLeagues from './SelectLeagues';

class FilterCommands extends Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);
        this.handleLeague = this.handleLeague.bind(this);

        this.state = {
            filterText: '',
            league: 'all'
        };
    }

    handleText(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    handleLeague(league) {
        this.setState({
            league: league
        });
    }

    render() {
        //console.log(`${this.state.league}`);

        return (
            <section>
                <SearchBar
                    onHandleText={this.handleText}
                    filterText={this.state.filterText}
                />
                <SelectLeagues
                    commands={this.props.commands}
                    onHandleLeague={this.handleLeague}
                    league={this.state.league}
                />
                <Commands
                    commands={this.props.commands}
                    filterText={this.state.filterText}
                    league={this.state.league}
                />
            </section>
        )
    }
}

export default FilterCommands;