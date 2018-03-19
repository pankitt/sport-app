import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);
    }

    handleText(e) {
        this.props.onHandleText(e.target.value);
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."
                       value={this.props.filterText}
                       onChange={this.handleText} />
            </form>
        )
    }
}

export default SearchBar;