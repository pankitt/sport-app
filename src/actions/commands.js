import { COMMANDS__ADD } from '../constants/commands';

export const loadAll = () => (dispatch, getState) =>
    new Promise((resolve, reject) => {
        fetch('http://localhost:3004/commands')
            .then(response => response.json())
            .then(commands => {
                dispatch(add(commands));

                resolve();
            })
            .catch(reject);
    });

export const add = commands => ({
    type: COMMANDS__ADD,
    commands
});