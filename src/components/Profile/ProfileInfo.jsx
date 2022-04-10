import React from 'react';
import classes from './Profile.module.css'
const ProfileInfo = () => {
    return <div className={classes.info}>
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
}
export default ProfileInfo;