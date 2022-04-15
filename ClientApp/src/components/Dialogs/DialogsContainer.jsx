import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (message) => dispatch(updateMessageActionCreator(message)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;