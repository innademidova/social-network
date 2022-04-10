import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'
import dialogs_avatar from './dialogs_avatar.jpg'
const DialogItem = (props) => {
    return <div className={classes.dialog_item}>
        <img className={classes.dialogs_avatar} src={dialogs_avatar} />
        <NavLink to={'/dialogs/' + props.id} className={classes.dialog}>
        {props.name}
    </NavLink>
    </div>
}
export default DialogItem;