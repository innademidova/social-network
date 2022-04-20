const SET_USER_DATA = 'SET_USER_DATA';
const initialState = {
    userId: null,
    email: null,
    login: null
}
export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
            default:
                return state;
    }
}

export const setUsersDataActionCreator = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})