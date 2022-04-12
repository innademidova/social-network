const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const initialState = {
    dialogs: [
        { name: 'Alex', id: 1 },
        { name: 'Kamilla', id: 2 },
        { name: 'Roman', id: 3 },
        { name: 'Leo', id: 4 }],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am missing you!' },
        { id: 4, message: 'yo' }],
    newMessageText: ''
}
export const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state;
        case SEND_MESSAGE:
            const message = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(message)
            state.newMessageText = ''
            return state;
        default:
            return state;
    }
}

export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMessageText: text })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })