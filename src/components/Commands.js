import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class CommandsList extends Component {
    render(){
        const command = this.props.command;
        const points = this.props.points;

        return (
            <li>
                <Link to={`/players`}>{command}</Link> {points}
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
                    <CommandsList key={index} command={item.command} points={item.points}/>
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


function mapStateToProps(state) {
    return {
        commands: state.commands
    };
}

export default connect(mapStateToProps)(Commands);