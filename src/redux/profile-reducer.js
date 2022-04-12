const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const initialState = {
    posts: [
        { id: 1, post: 'Russian warship go f**k yourself', likes: 129 },
        { id: 2, post: 'Hello, how are you?', likes: 10 }
    ],
    newPostText: ''
}
export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                post: state.newPostText,
                likes: 11
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text })