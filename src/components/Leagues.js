import React, { Component } from 'react';

class Leagues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueName: []
        };
    }

    render() {
        const commands = this.props.commands;

        return (
            <section>
                <h3>Leagues</h3>
                {commands.map((item, index) =>
                    <li key={index}>
                        {item.league}
                    </li>
                )}
            </section>
        );
    }
}

export default Leagues;