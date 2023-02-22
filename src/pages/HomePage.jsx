import React from 'react';
import {Redirect, useHistory} from "react-router-dom";
import {UseAuth} from "../hooks/UseAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slice/userSlice";
import styles from "../style/style.module.scss"
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselComponent from "../components/CarouselComponent";
import ModalWindow from "../components/ModalWindow";

const HomePage = () => {


    const {isAuth, email} = UseAuth();
    const dispatch = useDispatch();
    const {push} = useHistory()

    return isAuth ? (
            <div>
                <div className={styles.congratsForm}>
                    <h1>Registration Successfully</h1>
                </div>

                <button onClick={() => dispatch(removeUser())}>You can LOG OUT: {email}</button>
                <div className={styles.congratsformButton}>
                    <button onClick={() => push('/login')}>BACK</button>
                </div>

            </div>
        )

        : (
            <div>
                <Header />
                <div className={styles.congratsForm__title}>
                <ModalWindow />
                </div>
                <div className={styles.congratsForm__title__text}>
                    <h1>Please Touch pictures or click OPEN MODAL</h1>
                </div>
                <div style={{height: "1200px", position: "absolute"}}>
                    <CarouselComponent />

                </div>
                <Footer />

            </div>

        );
};

export default HomePage;