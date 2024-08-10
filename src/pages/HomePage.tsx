import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slice/userSlice';
import styles from '../style/style.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModalWindow from '../components/ModalWindow';
import { redirect } from 'next/navigation';
import Navigation from '../navigation';
import { Box, Skeleton } from '@mui/material';
import { UserCardViewsUi } from '../style/styled/UserCardViews';

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div>
      <div className={styles.congratsForm}>
        <h1>Registration Successfully</h1>
      </div>

      <button onClick={() => dispatch(removeUser())}>You can LOG OUT: {email}</button>
      <div className={styles.congratsformButton}>
        <button onClick={() => redirect('/login')}>BACK</button>
      </div>
    </div>
  ) : (
    <div>
      <Header />
      <Navigation />

      <Box>
        <UserCardViewsUi>
          <h1>This is Styled Component</h1>
        </UserCardViewsUi>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Box>

      <div className={styles.congratsForm__title}>
        <ModalWindow />
      </div>
      <div className={styles.congratsForm__title__text}>
        <h1>Please click OPEN MODAL</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
