const initialState = [
    {link: '/', label: 'Main'},
    {link: '/leagues', label: 'Leagues'},
    {link: '/commands', label: 'Commands'},
    {link: '/players', label: 'Players'},
];

export const getMenu = () => dispatch => {
    dispatch({ type: 'LINK_NAV', payload: initialState });
};