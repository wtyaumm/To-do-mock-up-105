import React from 'react'
import styles from '../styles/totalTodoBox.module.css';

const TotalTodoBox = ({ todo }) => {
    return (
        <div className={styles.all}>
            <div className={styles.box}>
                <div className={styles.title}>To-dos</div>
                <div className={styles.number}>{todo.length}</div>
            </div>
            <div className={styles.box}>
                <div className={styles.title}>Done Tasks</div>
                <div className={styles.number}>{todo.filter((e) => e.status).length}</div>
            </div>
            <div className={styles.box}>
                <div className={styles.title}>Undone Tasks</div>
                <div className={styles.number}>{todo.filter((e) => !e.status).length}</div>
            </div>
        </div>
    )
}

export default TotalTodoBox;
