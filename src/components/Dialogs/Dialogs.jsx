import React from 'react'
import { sendMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}></DialogItem>)
    const messagesItems = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message} />)
    const newMessage = React.createRef()
    const changeMessage = () => {
        const message = newMessage.current.value
        props.dispatch(updateMessageActionCreator(message))
    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    return <div className={classes.dialogs}>
        <div className={classes.dialogs_item}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesItems}
            <textarea placeholder='Enter your message' ref={newMessage} value={props.newMessageText} onChange={changeMessage}> </textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
}
export default Dialogs;