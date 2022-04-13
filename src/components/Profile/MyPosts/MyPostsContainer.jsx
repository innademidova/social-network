import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (message) => {
        let action = updatePostTextActionCreator(message)
        props.store.dispatch(action)
    }
    return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
}
export default MyPostsContainer;