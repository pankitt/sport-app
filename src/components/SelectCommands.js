import React, { Component } from 'react';

class SelectCommands extends Component {
    constructor(props) {
        super(props);
        this.handleLeague = this.handleLeague.bind(this);
    }

    handleLeague(e) {
        this.props.onHandleLeague(e.target.value);
    }

    render() {
        return (
            <div>
                <label>
                    Select League:
                    <select value={this.props.league} onChange={this.handleLeague}>
                        <option value="all">all</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
            </div>
        )
    }

}

export default SelectCommands;