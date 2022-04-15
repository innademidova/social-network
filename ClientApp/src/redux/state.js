import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"
import { sidebarReducer } from "./sidebar-reducer"

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Russian warship go f**k yourself', likes: 129 },
                { id: 2, post: 'Hello, how are you?', likes: 10 }
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {

        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.state = store;
export default store;