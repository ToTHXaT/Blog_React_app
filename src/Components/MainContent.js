import React from 'react';
import classes from './MainContent.module.css';
import RegisterForm from './RegisterForm';
import UserProfile from './UserProfile';


const MainContent = () => {
    return (
    <div className={ classes['main-content'] }>
        <div className={ classes['title'] }>
            User profile
        </div>
        {/*<RegisterForm/>}*/}
        
        <UserProfile/>

    </div>
    );
}

export default MainContent;