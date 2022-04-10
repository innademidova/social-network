import React from 'react';
import avatar from './avatar.jpeg';
import ProfileInfo from './ProfileInfo';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return <div className={classes.profile}>
        <img src={avatar} className={classes.avatar} alt="logo" />
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}
            newPostText={props.profilePage.newPostText} />
    </div>
}
export default Profile;