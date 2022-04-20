const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const initialState = {
    users: [],
    pageSize: 2,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
            case TOGGLE_IS_FETCHING:
                return {
                    ...state, 
                    isFetching: action.isFetching
                }
        default:
            return state;
    }

}
export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setUsersCountActionCreator = (usersCount) => ({ type: SET_USERS_COUNT, usersCount })
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})