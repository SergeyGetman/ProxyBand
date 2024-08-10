import React from 'react';
import Login from '../components/Login';
import styles from '../style/style.module.scss';
import MainContainer from '../components/MainContainer';
import Navigation from 'navigation';

const LoginPage = () => {
  return (
    <MainContainer>
      <h1>Login</h1>
      <div className={styles.loginForm}>
        <Login />
        <h2>or:</h2> <Navigation to="/register">Register</Navigation>
      </div>
    </MainContainer>
  );
};

export default LoginPage;
