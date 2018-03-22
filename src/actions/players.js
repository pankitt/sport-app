import { PLAYERS__ADD } from '../constants/players';

export const loadAll = () => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:3004/players')
      .then(response => response.json())
      .then(players => {
        dispatch(add(players));

        resolve();
      })
      .catch(reject);
  });

export const add = players => ({
  type: PLAYERS__ADD,
  players
});
