import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Sidebar.module.css'

const Link = (props) => {
    return <NavLink to={props.to} className={({ isActive }) =>  (isActive ? classes.activated : classes.link)}>
        {props.text}
    </NavLink>
}

const Sidebar = () => {

    return <nav className={classes.nav}>
        <Link to='/profile' text='Profile' />
        <Link to='/dialogs' text='Messages' />
        <Link to='/news' text='News' />
        <Link to='/music' text='Music' />
        <Link to='/settings' text='Settings' />
        <Friends />
    </nav>
}
export default Sidebar;