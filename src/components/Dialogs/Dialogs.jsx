import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />)
    const messagesItems = props.messages.map(message => <Message key={message.id} message={message.message} />)
    const newMessage = React.createRef()
    const sendMessage = () => {
        props.sendMessage()
    }
    const changeMessage = () => {
        let message = newMessage.current.value
        props.updateMessageText(message)
    }
    return <div className={classes.dialogs}>
        <div className={classes.dialogs_item}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesItems}
            <textarea onChange={changeMessage} placeholder='Enter your message' ref={newMessage} value={props.newMessageText} >
            </textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
}
export default Dialogs;