import React, { Component } from 'react';

class Players extends Component {
    render() {
        const players = this.props.players;
        const playersName = [];

        players.forEach((item, index) => {
            playersName.push(
                <li key={index}>
                    {item.name} ({item.command})
                </li>
            );


        });

        return (
            <section>
                <h3>Players</h3>
                {playersName}
            </section>
        );
    }
}

export default Players;