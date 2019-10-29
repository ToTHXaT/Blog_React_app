import React from 'react';
import classes from './MainContent.module.css';
import RegisterForm from './RegisterForm';

const MainContent = () => {
    return (
    <div className={ classes['main-content'] }>
        <div className={ classes['title'] }>
            This is blog
        </div>
        <RegisterForm/>
    </div>
    );
}

export default MainContent;