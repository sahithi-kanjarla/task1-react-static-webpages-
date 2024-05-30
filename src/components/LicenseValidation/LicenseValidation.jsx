import React from 'react';
import styles from './LicenseValidation.module.css';

const LicenseValidation = () => {
    return (
        <div className={styles.container}>
            <img src="infinitylogo.png" height="100" width="200" className={styles.infinityx} alt="Infinity Logo" />
            <form className={styles.form}>
                <h2>Login</h2>
                <p>Let's get to work</p>
                <input
                    type="email"
                    placeholder="Email ID"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Login
                </button><br></br>
                <a href="#!" className={styles.forgotPassword}>Forgot Password?</a>
            </form>
            <a href="https://www.codeplayers.in" target="_blank" rel="noopener noreferrer">
                <img src="codelogo.png" height="50" width="200" className={styles.codep} alt="Code Logo" />
            </a>
        </div>
    );
};

export default LicenseValidation;
