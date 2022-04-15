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
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: state.newMessageText }],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })
