import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import classes from '../Profile.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    const postItems = props.posts.map(item => <Post key={item.id} message={item.post} likes={item.likes} />)
    const newPost = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onChange = () => {
        let message = newPost.current.value
        props.dispatch(updatePostTextActionCreator(message))
    }
    return <div className={classes['entry-field']}>
        <div>My Posts</div>
        <textarea onChange={onChange} ref={newPost} placeholder='How are you doing?' value={props.newPostText}>
        </textarea>
        <button onClick={addPost}>Add post</button>
        {postItems}
    </div>
}
export default MyPosts;