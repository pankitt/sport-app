import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Leagues extends Component {

    render() {
        const filterText = this.props.filterText;
        const commands = this.props.commands;
        const filterUnique = [];
        const ua_leagues = [];
        const usa_leagues = [];


        commands.forEach((item, index) => {
            const mySet = new Set(filterUnique);
            if (mySet.has(item.league)) {
                return;
            }

            if (item.league.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (item.country === 'Ukraine') {
                ua_leagues.push(
                    <li key={index}>
                        <Link to={`/`}>{item.league}</Link>
                    </li>
                );
            }
            if (item.country === 'USA') {
                usa_leagues.push(
                    <li key={index}>
                        <Link to={`/`}>{item.league}</Link>
                    </li>
                );
            }
            filterUnique.push(item.league);
        });

        return (
            <section>
                <h3>Leagues</h3>
                <b>Ukraine</b>
                <ul>{ua_leagues}</ul>
                <b>USA</b>
                <ul>{usa_leagues}</ul>
            </section>
        );
    }
}

export default Leagues;