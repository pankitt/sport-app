import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/Home';
import Leagues from '../../components/Leagues';
import Commands from '../../components/Commands';
import Players from '../../components/Players';

class Main extends Component {
    render() {
        const commands = this.props.commands;
        const players = this.props.players;

        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/leagues' render={(obj) => <Leagues commands={commands} obj={obj} />} />
                    <Route path='/commands' render={(obj) => <Commands commands={commands} obj={obj} />} />
                    <Route path='/players' render={(obj) => <Players players={players} obj={obj} />} />
                </Switch>
            </main>
        );
    }
}

export default Main;