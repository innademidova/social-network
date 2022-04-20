import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';


const ProfileContainer = ({setUserProfile, profile}) => {
    const { userId } = useParams();
    useEffect(() => {

        axios.get(`https://localhost:7202/Users/profile/${userId}`)
            .then(response => setUserProfile(response.data))
    }, [setUserProfile, userId])

    return <Profile profile={profile} />

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfile(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);