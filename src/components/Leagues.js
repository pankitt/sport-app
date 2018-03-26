import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class Leagues extends Component {

    render() {
        const filterText = this.props.filterText;
        const commands = this.props.commands;
        const filterUnique = [];
        const leagues = [];
        let lastCountry = null;


        commands.forEach((item, index) => {
            if (filterUnique.indexOf(item.league) !== -1) {
                return
            }

            if (item.league.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }

            if (item.country !== lastCountry) {
                leagues.push(
                    <li key={item.country}><b>{item.country}</b></li>
                );
            }
            leagues.push(
                <li key={index}>
                    <Link to={`/commands`}>{item.league}</Link>
                </li>
            );
            lastCountry = item.country;
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

function mapStateToProps(state) {
    return {
        commands: state.commands
    };
}

export default connect(mapStateToProps)(Leagues);