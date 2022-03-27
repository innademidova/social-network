import React from 'react';
import avatar from '../avatar.jpeg';
import Profile from './Info';
import Posts from './Posts';
const Content = () => {
    return  <div className='content'>
    <img src={avatar} className="avatar" alt="logo" />
    <Profile />
    <Posts />
    </div>
}
export default Content;