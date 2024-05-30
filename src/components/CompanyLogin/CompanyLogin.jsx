import React from 'react';
import styles from './CompanyLogin.module.css';

const LicenseValidation = () => {
    return (
        <div className={styles.container}>
            <img src="skalogos.png" className={styles.logos} alt="company logo"></img>
            <p className={styles.headings}>SKA Steel and Power private Limited</p>

            <form className={styles.form}>
                <h2 classname={styles.title}>Login</h2>
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
            
        </div>
    );
};

export default LicenseValidation;