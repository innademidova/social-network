import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
const Header = () => {
    return <header className={classes.header} >
        <img alt='logo' className={classes.logo} src='https://st2.depositphotos.com/20837402/44991/v/600/depositphotos_449913864-stock-illustration-id-letter-logo-design-with.jpg' />
        <div className={classes.login_block}>
        <NavLink to={'/login'}>Login</NavLink>
        </div>
    </header >

}
export default Header;