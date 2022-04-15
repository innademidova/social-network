import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'
import default_avatar from './default_avatar.jpg'
const DialogItem = (props) => {
    return <div className={classes.dialog_item}>
        <img className={classes.dialogs_avatar} src={default_avatar} />
        <NavLink to={'/dialogs/' + props.id} className={classes.dialog}>
        {props.name}
    </NavLink>
    </div>
}
export default DialogItem;