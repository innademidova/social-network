const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Russian warship go f**k yourself', likes: 129 },
                { id: 2, post: 'Hello, how are you?', likes: 10 }
            ],
            newPostText: 'hi'
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
                { id: 4, message: 'yo' }]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    dispatch(action) {
        if (action.type === 'add-post') {
                const newPost = {
                    id: 3,
                    post: this._state.profilePage.newPostText,
                    likes: 11
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state)
            
        }
        else if (action.type === 'update-post-text') {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
        }

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
window.state = store;
export default store;