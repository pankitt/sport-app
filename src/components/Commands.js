import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CommandsList extends Component {
    render(){
        const command = this.props.command;

        return (
            <li>
                <Link to={`/`}>{command}</Link>
            </li>
        )
    }
}

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
                    <CommandsList key={index} command={item.command}/>
                );

            }
            if (league === item.league) {
                commandName.push(
                    <CommandsList key={index} command={item.command}/>
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