import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/Home';
import FilterLeagues from '../../components/FilterLeagues';
import FilterCommands from '../../components/FilterCommands';
import FilterPlayers from '../../components/FilterPlayers';
import PlayerCard from '../../components/PlayerCard';

class Main extends Component {
    render() {
        const commands = this.props.commands;
        const players = this.props.players;

        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/leagues' render={(obj) => <FilterLeagues commands={commands} obj={obj} />} />
                    <Route path='/commands' render={(obj) => <FilterCommands commands={commands} obj={obj} />} />
                    <Route exact path='/players' render={(obj) => <FilterPlayers players={players} obj={obj} />} />
                        <Route path='/players/:number' render={(obj) => <PlayerCard players={players} obj={obj} />} />
                </Switch>
            </main>
        );
    }
}

export default Main;