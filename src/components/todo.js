import React from 'react';
import styles from '../styles/todo.module.css';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { ToDoBox } from './toDoBox';
import { Button, Grid } from '@mui/material';
import TotalTodoBox from './totalTodoBox';

export const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    const toggleStatus = (index) => {
        let temp = todo;
        temp[index].status = !temp[index].status;
        setTodo([...temp]);
    }

    const addToDo = () => {
        console.log(text);
        setTodo([
            ...todo, {
                name: text,
                date: new Date(),
                status: false
            }
        ]);
    }

    return (
        <>
            <div className={styles.box}>
                <p className={styles.title}>What you need to do?</p>
                <div className={styles.addTodo}>
                    <Form>
                        <Form.Group className={styles.input}>
                            <Form.Control type="text" className={styles.type} value={text} onChange={(e) => setText(e.target.value)} />
                            <Button onClick={addToDo}>add!</Button>
                        </Form.Group>
                    </Form>
                </div>
                <TotalTodoBox todo={todo} />
                <Grid container spacing={2}>
                    {
                        todo.map((e, index) => (
                            <Grid item xs={6} key={index}>
                                <ToDoBox
                                    name={e.name}
                                    date={e.date}
                                    status={e.status}
                                    handdleStatus={() => toggleStatus(index)}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </>
    )
}