import React, { Component } from 'react'
import styles from '../styles/login.module.css';
import { Form, Button } from 'react-bootstrap';
import Todo from './todo';
import { Link } from 'react-router-dom';

class LoginCard extends Component {
    render() {
        return (
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <p className={styles.welcome}>Welcome back</p>
                        <p className={styles.text}>We're so excited to sleep again ;-;</p>
                        <Form>
                            <Form.Group>
                                <Form.Label className={styles.textLabel}>EMAIL OR PHONE NUMBER</Form.Label>
                                <Form.Control type='text' className={styles.formControl}></Form.Control>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className={styles.textLabel}>PASSWORD</Form.Label>
                                <Form.Control type='text' className={styles.formControl}></Form.Control>
                                <Form.Text><a href='/' className={styles.link}>Forget your password?</a></Form.Text>
                            </Form.Group>
                        </Form>
                        <Link to='/todo'><Button type='submit' className={styles.button}>Login</Button></Link>
                        <p className={styles.register}>Need an account?<a href='/' className={styles.link}> Register</a></p>
                    </div>
                    <div className={styles.right}>
                        <img src='images/spotify.png' className={styles.spotify} />
                        <p className={styles.welcome}>Unable to Login?</p>
                        <div className={styles.describeSong}>
                            Listen to some music, relax yourself,
                            and take a deep breath until you
                            can remember your password.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginCard;