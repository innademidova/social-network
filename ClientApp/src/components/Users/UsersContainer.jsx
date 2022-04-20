import React from 'react'
import { connect } from "react-redux";
import { setCurrentPageActionCreator, setUsersActionCreator, setUsersCountActionCreator, toggleFollowActionCreator, toggleIsFetchingActionCreator } from "../../redux/users-reducer";
import Users from "./Users";
import axios from 'axios'
import Preloader from '../common/Preloader/Preloader';
class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        axios.get(`https://localhost:7202/Users?pageNumber=${this.props.currentPage}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.users);
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }
    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://localhost:7202/Users?pageNumber=${pageNumber}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.users);
            })
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            toggleFollow={this.props.toggleFollow}
            changePage={this.changePage}
            users={this.props.users}
        />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageActionCreator(page)),
        setTotalUsersCount: (count) => dispatch(setUsersCountActionCreator(count)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingActionCreator(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);