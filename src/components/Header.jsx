import React from 'react';
import styles from "./stylesComponents.module.scss"
import Logo from "../images/logoCompany.png"

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <a href="#" className={styles.header__logo}>
                    <img src={Logo} alt=""/>
                </a>
                <div className={styles.header__right}>
                    <a className={styles.header__active} href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </div>
    );
};

export default Header;