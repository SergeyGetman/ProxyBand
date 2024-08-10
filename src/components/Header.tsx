import React from 'react';
import styles from './stylesComponents.module.scss';
import Logo from '../images/logoCompany.png';
import LinkTo from '../components/LinkTo';

const Header = ({ actStyle }) => {
  return (
    <div>
      <div className={styles.header}>
        <a href="#" className={styles.header__logo}>
          <img src={Logo} alt="" />
        </a>
        <div className={styles.header__right}>
          <LinkTo href="/" text="HOME" className={styles.header__active}>
            Home
          </LinkTo>
          <LinkTo href="/blogs" text="BLOG">
            Insta Guid
          </LinkTo>
          {/*<Link href="register">Register</Link>*/}
          {/*<Link href="Login">Login</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
