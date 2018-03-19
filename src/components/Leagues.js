import React, { Component } from 'react';

class Leagues extends Component {

    render() {
        const filterText = this.props.filterText;
        const commands = this.props.commands;
        const leagues = [];
        const filterUnique = [];

        commands.forEach((item, index) => {
            filterUnique.push(item.league);

            if (item.league.indexOf(filterUnique[index - 1]) !== -1) {
                return;
            }
            if (item.league.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }

            leagues.push(
                <li key={index}>
                    {item.league}
                </li>
            );


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