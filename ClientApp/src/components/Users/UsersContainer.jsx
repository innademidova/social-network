import { connect } from "react-redux";
import {setUsersActionCreator, toggleFollowActionCreator} from "../../redux/users-reducer";
import Users from "./Users";
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;