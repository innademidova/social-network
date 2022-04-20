import React from 'react'
import classes from './Users.module.css'
import default_avatar from './default_avatar.jpg'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pageNumber = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNumber.push(i);
    }
    return <div>
        <div>
            {
                pageNumber.map(page => {
                    return <button onClick={() => props.changePage(page)} key={page} className={props.currentPage === page ? classes.current_page : ''}>{page}</button>
                })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id} >  <img alt='user-avatar' className={classes.user_avatar} src={user.photos.large != null ? user.photos.large
                            : default_avatar} />
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>

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

export default Users;