import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slice/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { redirect } from 'next/navigation';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user?.email,
            id: user?.uid,
            token: user?.accessToken,
          }),
        );
        redirect('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <>
      <Form title="sign in" handleClick={handleLogin} />
    </>
  );
};

export default Login;
