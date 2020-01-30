import React from 'react';

import logo from '../../GitHub-Mark-Light-64px.png';
import Link from "../Link/Link";
import './Header.css';

const Header = () => (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
            My Github Portfolio
        </h1>
    </header>
);
export default Header;