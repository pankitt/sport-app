import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import FilterLeagues from './components/FilterLeagues';
import FilterCommands from './components/FilterCommands';
import FilterPlayers from './components/FilterPlayers';
import PlayerCard from './components/PlayerCard';
import Header from './components/Header';

const store = configureStore();

const MENU = [
  { link: '/', label: 'Main' },
  { link: '/leagues', label: 'Leagues' },
  { link: '/commands', label: 'Commands' },
  { link: '/players', label: 'Players' }
];

ReactDOM.render(
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <div>
          <Header items={MENU} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/leagues"
              render={obj => <FilterLeagues obj={obj} />}
            />
            <Route
              path="/commands"
              render={obj => <FilterCommands obj={obj} />}
            />
            <Route
              exact
              path="/players"
              render={obj => <FilterPlayers obj={obj} />}
            />
            <Route
              path="/players/:number"
              render={obj => <PlayerCard obj={obj} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
