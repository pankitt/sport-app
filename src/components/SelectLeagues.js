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
        const commands = this.props.commands;
        const filterUnique = [];
        const leagues = [];

        commands.forEach((item, index) => {
            if (filterUnique.indexOf(item.league) !== -1) {
                return
            }

            leagues.push(
                <option key={index} value={item.league}>
                    {item.league}
                </option>
            );

            filterUnique.push(item.league);
        });

        return (
            <div>
                <label>
                    Select League:
                    <select value={this.props.league} onChange={this.handleLeague}>
                        <option value="all">all</option>
                        {leagues}
                    </select>
                </label>
            </div>
        )
    }

}

export default SelectCommands;