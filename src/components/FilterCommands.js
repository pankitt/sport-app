import React, { Component } from 'react';
import Commands from './Commands';
import SearchBar from './SearchBar';

class FilterCommands extends Component {
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
                <Commands
                    commands={this.props.commands}
                    filterText={this.state.filterText}
                />
            </section>
        )
    }
}

export default FilterCommands;