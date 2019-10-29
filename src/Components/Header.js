import React from 'react';
import classes from './Header.module.css'


const Header = () => {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Facebook_logo.png" alt="" /> 
        </div>
        <ul className={classes['nav-bar']}>
            <li> Profile </li>
            <li> New posts </li>
            <li> Create post </li>
            <li> Search </li>
            <li> *** </li>
        </ul>
    </header>);
}

export default Header;