import React from 'react';
import styles from "./stylesComponents.module.scss"
import Logo from "../images/logoCompany.png"
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <a href="#" className={styles.header__logo}>
                    <img src={Logo} alt=""/>
                </a>
                <div className={styles.header__right}>
                    <Link className={styles.header__active} href="/">Home</Link>
                    <Link href="/insta-users">Insta Guid</Link>
                    <Link href="register">Register</Link>
                    <Link href="login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;