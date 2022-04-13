import React from 'react'
import { sendMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage
    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    const changeMessage = (message) => {
        props.store.dispatch(updateMessageActionCreator(message))
    }
    return <Dialogs updateMessageText={changeMessage} sendMessage={sendMessage} 
    newMessageText={state.newMessageText} dialogs={state.dialogs} messages={state.messages} />
}
export default DialogsContainer;