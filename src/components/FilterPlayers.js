import React, { Component } from 'react';
import Players from './Players';
import SearchBar from './SearchBar';

class FilterPlayers extends Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);

        this.state = {
            filterText: ''
        };
    }

    handleText(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <section>
                <SearchBar
                    onHandleText={this.handleText}
                    filterText={this.state.filterText}
                />
                <Players
                    players={this.props.players}
                    filterText={this.state.filterText}
                />
            </section>
        )
    }
}

export default FilterPlayers;