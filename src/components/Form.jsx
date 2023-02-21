import React, {useState} from 'react';
import styles from "../style/style.module.scss"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className={styles.inputbox}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="password"/>
            <button onClick={() => handleClick(email, pass)}>{title}</button>
        </div>
    );
};

export default Form;