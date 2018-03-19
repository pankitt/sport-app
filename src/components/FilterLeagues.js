import React, { Component } from 'react';
import Leagues from './Leagues';
import SearchBar from './SearchBar';

class FilterLeagues extends Component {
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
                <br/>
                <Leagues
                    commands={this.props.commands}
                    filterText={this.state.filterText}
                />
            </section>
        )
    }
}

export default FilterLeagues;