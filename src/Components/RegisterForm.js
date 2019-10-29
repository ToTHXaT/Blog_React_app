import React from 'react';
import classes from './RegisterForm.module.css';

const RegisterForm = () => {
    return (
    <div className={ classes['reg-form'] }>
        <form className = { classes['form'] }>
            <label for='sname'> Second Name </label> <br/> <input type='text' name='sname' id='sname' className={ classes['sname'] }/> <br/>
            <label for='fname'> First Name </label> <br/> <input type='text' name='fname' id='fname' className= { classes['fname'] } /> <br/>
            <label for='nick'> Nick </label> <br/> <input type='text' name='nick' id='nick' className={ classes['nick'] }/> <br/>
            <label for='email'> Email </label> <br/> <input type='email' name='email' id='email' className={ classes['email'] }/> <br/>
            <label for='birthdate'> Birth Date </label> <br/> <input type='date' name='birthdate' id='birthdate' className={ classes['birthdate'] }/> <br/>
            <label for='passwrd'> Password </label> <br/> <input type='password' name='passwrd' id='passwrd' className= { classes['passwrd'] } />

            <button name='submit-button' id='submit-button' className={ classes['submit-button'] } value='Submit'> Submit </button>
        </form>
    </div>
    )
}

export default RegisterForm;