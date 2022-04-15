import React from 'react';
import avatar from './avatar.jpeg';
import ProfileInfo from './ProfileInfo';
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return <div className={classes.profile}>
        <img src={avatar} className={classes.avatar} alt="logo" />
        <ProfileInfo />
        <MyPostsContainer store={props.store} />
    </div>
}
export default Profile;