import React, { useEffect } from "react";
import ListItem from "./ListItem";

import { useSelector } from "react-redux";

export default props => {
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    console.log("it works");
  }, []);

  return todos.map(todo => <ListItem todo={todo} key={todo.id}></ListItem>);
};
