const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS'
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed}
                    }
                    return user;
                })
            }
                case SET_USERS:
                    return {
                        ...state,
                        users: [ ...action.users]
                    }
        default:
            return state;
    }

}
export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersActionCreator = (users) => ({type:SET_USERS, users})