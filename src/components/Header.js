import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header className='header'>
                <nav>
                    {this.props.items.map((item, index) =>
                        <NavLink to={item.link} key={index} activeClassName="active">{item.label}</NavLink>
                    )}
                </nav>
            </header>
        );
    }
}

export default Header;