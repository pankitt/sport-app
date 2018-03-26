import { COMMANDS__ADD } from '../constants/commands';

export default function playersReducre(state = [], action) {
    switch (action.type) {
        case COMMANDS__ADD:
            return [...state, ...action.commands];

        default:
            return state;
    }
}