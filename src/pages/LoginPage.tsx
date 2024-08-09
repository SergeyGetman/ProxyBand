import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";
import styles from "../style/style.module.scss"
import MainContainer from "../components/MainContainer";

const LoginPage = () => {
    return (
        <MainContainer>
            <h1>Login</h1>
            <div className={styles.loginForm}>
                <Login />
             <h2>or:</h2>   <Link to="/register">Register</Link>
            </div>

        </MainContainer>
    );
};

export default LoginPage;