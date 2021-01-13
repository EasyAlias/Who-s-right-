import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <h1 className="header__title">
                    Кто прав?
                </h1>
            </header>
        );
    }
}
 
export default Header;