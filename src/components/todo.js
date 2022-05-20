import React from "react";
import styles from "../styles/todo.module.css";
import { Form, Input, Button, FormGroup } from "reactstrap";
import { useState } from "react";
import { ToDoBox } from "./toDoBox";
import { Row, Col } from "reactstrap";
import TotalTodoBox from "./totalTodoBox";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const toggleStatus = (index) => {
    let temp = todo;
    temp[index].status = !temp[index].status;
    setTodo([...temp]);
  };

  const addToDo = (e) => {
    e.preventDefault();
    if (text == "" || text.trim() == "") return;
    console.log(text);
    setTodo([
      ...todo,
      {
        name: text,
        date: new Date(),
        status: false,
      },
    ]);
    setText("");
  };

  return (
    <>
      <div
        className={styles.box}
        onKeyDown={(e) => e.key === "Enter" && addToDo(e)}
      >
        <p className={styles.title}>What you need to do?</p>
        <div className={styles.addTodo}>
          <Form>
            <FormGroup className={styles.input}>
              <Input
                type="text"
                className={styles.type}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button className={styles.button} onClick={addToDo}>
                add!
              </Button>
            </FormGroup>
          </Form>
        </div>
        <TotalTodoBox todo={todo} />
        <Row>
          {todo.map((e, index) => (
            <Col xs="6" key={index}>
              <ToDoBox
                name={e.name}
                date={e.date}
                status={e.status}
                handdleStatus={() => toggleStatus(index)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
