import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.navbar}>
                <div className={styles.Header}>
                    <a href='/'><img src='images/logo1.png' height='50' width='50' /></a>
                    <a href='/' className={styles.name}>Due Today, Do Tomorrow</a>
                </div>
                <div className={styles.Header}>
                    <Link to='/'><button type='button' className={styles.buttons}>Login</button></Link>
                    <Link to='/todo'><button type='button' className={styles.buttons}>Home</button></Link>
                </div>
            </div >
        );
    }
}
export default Header;