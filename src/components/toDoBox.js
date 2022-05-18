import React from 'react'
import styles from '../styles/toDoBox.module.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const ToDoBox = ({ name, date, status, handdleStatus }) => {
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    return (
        <div className={styles.box} onClick={handdleStatus}>
            <div>{name}</div>
            <div className={styles.date}>
                <CalendarTodayIcon />
                {formattedDate}
            </div>
            <div className={styles.date}>
                {status ? <CheckIcon className={styles.check} /> : <ClearIcon className={styles.clear} />}
                {status ? "Done" : "Undone"}</div>
        </div>
    )
}
