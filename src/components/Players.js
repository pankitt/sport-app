import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Players extends Component {
    render() {
        const filterText = this.props.filterText;
        const players = this.props.players;
        const playersName = [];

        players.forEach((item, index) => {
            if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            playersName.push(
                <li key={index}>
                    <Link to={`/players/${item.id}`}>{item.name}</Link> ({item.command})
                </li>
            );
        });

        return (
            <section>
                <h3>Players</h3>
                <ul>{playersName}</ul>
            </section>
        );
    }
}

export default Players;