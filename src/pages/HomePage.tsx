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
import Blog from '../components/Blog';

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

      <Box>
        <Blog text="BLOG-CONTENT" children={<ModalWindow />} />
      </Box>

      <Footer />
    </div>
  );
};

export default HomePage;
