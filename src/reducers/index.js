import { combineReducers } from 'redux';
import commands from './commands';
import players from './players';

export default combineReducers({
    commands,
    players
});
