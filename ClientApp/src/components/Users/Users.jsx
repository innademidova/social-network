import axios from 'axios'
import React from 'react'
import classes from './Users.module.css'
import default_avatar from './default_avatar.jpg'
class Users extends React.Component {
    componentDidMount = () => {
        axios.get('https://localhost:7202/Users')
            .then(response => this.props.setUsers(response.data.users))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pageNumber = [];
        for (let i = 1; i <= pagesCount; i++) {
            pageNumber.push(i);
        }
        return <div>
            <div>
                {
                    pageNumber.map(page => {
                        return <span key={page} className={this.props.currentPage === page ? classes.current_page : ''}>{page}</span>
                    })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img alt='user-avatar' className={classes.user_avatar} src={user.photos.large != null ? user.photos.large
                                : default_avatar} />
                        </div>
                        <div>
                            <button onClick={() => this.props.toggleFollow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>

                        </div>
                    </span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>
                            {user.location.city + ' ' + user.location.country}

                        </div>
                    </span>
                </div>)}
        </div>
    }
}

export default Users;