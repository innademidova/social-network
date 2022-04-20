const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const initialState = {
    posts: [
        { id: 1, post: 'Russian warship go f**k yourself', likes: 129 },
        { id: 2, post: 'Hello, how are you?', likes: 10 }
    ],
    newPostText: '',
    profile: null
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                post: state.newPostText,
                likes: 11
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.user
                }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text })
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, user})