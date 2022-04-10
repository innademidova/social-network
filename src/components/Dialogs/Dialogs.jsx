import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}></DialogItem>)
    const messagesItems = props.state.messages.map(message => <Message key={message.id} message={message.message} />)
    return <div className={classes.dialogs}>
        <div className={classes.dialogs_item}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesItems}
            <textarea></textarea>
            <button>Send</button>
        </div>
    </div>
}
export default Dialogs;