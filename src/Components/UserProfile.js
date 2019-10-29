import React from 'react';
import classes from './UserProfile.module.css';


const UserProfile = () => {
    return (
        <div className = { classes['userprofile'] }>
            <div className={ classes['snf'] }>
                Rakhmanov Ainur : Qeyn
            </div>
            <div className= { classes['article-list'] } >

            </div>
            <div className={ classes['info'] } >
                <div className= { classes['email'] }>
                    ainur-205@yandex.ru
                </div>
                <div className= { classes['regdate'] }>
                    29.08.1999
                </div>
                <div className= { classes['birthdate'] }>
                    29.07.1788
                </div>
            </div>
        </div>
    );
}


export default UserProfile;