import ListItems from "./ListItems";
import React from "react";
import HeaderElement from "src/components/layout/HeaderElement";

export default function Todo() {
  /// todos:
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "tests title",
      done: false
    },
    {
      id: 2,
      title: "tests2  title",
      done: false
    },
    {
      id: 3,
      title: "tests 3 title",
      done: true
    }
  ]);

  const markComplete = id => {
    setTodos(
      todos.map(v => {
        if (v.id === id) {
          v.done = !v.done;
        }
        return v;
      })
    );
  };

  return (
    <React.Fragment>
      <HeaderElement value={"No REDUX:"}></HeaderElement>
      <ListItems todos={todos} markComplete={markComplete} />
    </React.Fragment>
  );
}
