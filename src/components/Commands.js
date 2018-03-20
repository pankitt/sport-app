import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Commands extends Component {
    render() {
        const filterText = this.props.filterText;
        const league = this.props.league;
        const commands = this.props.commands;
        const commandName = [];


        commands.forEach((item, index) => {
            if (item.command.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (league === 'all') {
                commandName.push(
                    <li key={index}>
                        <Link to={`/`}>{item.command}</Link>
                    </li>
                );
            }
            if (league === item.league) {
                commandName.push(
                    <li key={index}>
                        <Link to={`/`}>{item.command}</Link>
                    </li>
                );
            }

        });

        return (
            <section>
                <h3>Commands</h3>
                <ul>{commandName}</ul>
            </section>
        );
    }
}

export default Commands;