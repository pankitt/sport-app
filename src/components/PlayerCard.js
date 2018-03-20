import React, { Component } from 'react';

class PlayerCard extends Component {

    render() {
        const num = this.props.obj.match.params.number;
        const players = this.props.players;
        const find = id => players.find(p => Number(p.id) === Number(id));
        const item = find(num);


        return (
            <section>
                <h3>User Card:</h3>

                <div>
                    <b>{item.name}</b>
                    <ul>
                        <li>command - {item.command}</li>
                        <li>No - {item.No}</li>
                        <li>Position - {item.Position}</li>
                        <li>country - {item.country}</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default PlayerCard;