import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlayerCard extends Component {
  render() {
    const num = this.props.obj.match.params.number;
    const players = this.props.players;
    const find = id => players.find(p => Number(p.id) === Number(id));
    const item = find(num);

    if (players.length === 0) return <div>Player not found</div>;
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
        <p>
          <Link to="/players">Back</Link>
        </p>
      </section>
    );
  }
}

export default PlayerCard;
