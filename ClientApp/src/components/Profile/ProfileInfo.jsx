import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import classes from './Profile.module.css'
const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return <div className={classes.profile_avatar}>
        <img src={props.profile.photos.large} className={classes.avatar} alt="logo" />
        <div className={classes.info}>

            <h1>Inna Demidova</h1>
            <p>
                Date of Birth: 16.12.1998
            </p>
            <p>
                City: Kharkiv
            </p>
            <p>
                Email: <a href='doc.idemidova@gmail.com'>doc.idemidova@gmail.com</a>
            </p>
            <p>
                Phone: +380506665094
            </p>
            <p>
                Instagram: <a href='http://instagram.com/inna__demidova'>inna__demidova</a>
            </p>
        </div>
    </div>
}
export default ProfileInfo;