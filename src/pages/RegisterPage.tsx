import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";
import styles from "../style/style.module.scss"
import MainContainer from "../components/MainContainer";

const RegisterPage = () => {
    return (
        <MainContainer>
            <h1>Register</h1>

            <div className={styles.loginForm}>
               <h2>Already have a account?</h2>  <Link to="/login">Sign In</Link>
                <SignUp />
            </div>
        </MainContainer>
    );
};

export default RegisterPage;