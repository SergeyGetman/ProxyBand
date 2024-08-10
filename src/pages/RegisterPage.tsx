import React from 'react';
import SignUp from '../components/SignUp';
import styles from '../style/style.module.scss';
import MainContainer from '../components/MainContainer';
import Navigation from 'navigation';

const RegisterPage = () => {
  return (
    <MainContainer>
      <h1>Register</h1>

      <div className={styles.loginForm}>
        <h2>Already have a account?</h2> <Navigation to="/login">Sign In</Navigation>
        <SignUp />
      </div>
    </MainContainer>
  );
};

export default RegisterPage;
