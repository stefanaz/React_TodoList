import React from "react";

import {
  updateTODOs,
  deleteItem
} from "src/components/withRedux/actions/todosAction";
import { useDispatch } from "react-redux";

export default props => {
  const dispatch = useDispatch();
  const updateList = item => dispatch(updateTODOs(item));
  const deleteItemAction = id => dispatch(deleteItem(id));

  const getStyles = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "15px",
      borderBottom: "1px #ccc dotted"
    };
  };

  const decorationStyles = () => {
    return {
      textDecoration: props.todo.done ? "line-through" : "none"
    };
  };

  const removeButton = () => {
    return {
      backgroundColor: "grey",
      padding: "5px",
      margin: "10px",
      float: "right",
      borderRadius: "25%",
      boxShadow: "none"
    };
  };

  const inlineStyle = () => {
    return {
      display: "inline-block",
      padding: "0px 25px"
    };
  };

  const markComplete = () => {
    updateList({ ...props.todo, done: !props.todo.done });
    console.log("update todo with id:", props.todo.id);
  };

  const removeButtonClick = () => {
    console.log("removeButtonClick");
    deleteItemAction(props.todo.id);
  };

  return (
    <div style={getStyles()}>
      <input
        type="checkbox"
        onChange={markComplete}
        name="done"
        checked={props.todo.done}
        style={inlineStyle()}
      />
      <p style={{ ...inlineStyle(), ...decorationStyles() }}>
        {props.todo.title}
      </p>
      <button
        style={{ ...inlineStyle(), ...removeButton() }}
        onClick={removeButtonClick}
      >
        x
      </button>
    </div>
  );
};
