import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Leagues extends Component {

    render() {
        const filterText = this.props.filterText;
        const commands = this.props.commands;
        const leagues = [];
        const filterUnique = [];

        commands.forEach((item, index) => {
            const mySet = new Set(filterUnique);
            if (mySet.has(item.league)) {
                return;
            }

            if (item.league.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }

            leagues.push(
                <li key={index}>
                    <Link to={`/`}>{item.league}</Link>
                </li>
            );
            filterUnique.push(item.league);
        });

        return (
            <section>
                <h3>Leagues</h3>
                <ul>{leagues}</ul>
            </section>
        );
    }
}

export default Leagues;