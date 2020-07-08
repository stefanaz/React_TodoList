import React from "react";
import Input from "src/components/withRedux/views/components/Input";
import Button from "src/components/withRedux/views/components/Button";

import { addTODO } from "src/components/withRedux/actions/todosAction";
import { useDispatch } from "react-redux";

export default function AddListItem() {
  const dispatch = useDispatch();
  const addTodoItem = item => dispatch(addTODO(item));
  const [newitem, setNewitem] = React.useState("");

  const inlineStyle = () => {
    return {
      textAlign: "right",
      display: "inline-block",
      width: "100%"
    };
  };

  return (
    <div style={inlineStyle()}>
      <div style={{ padding: "10px" }}>
        <Input
          type={"text"}
          property={"text"}
          onChange={setNewitem}
          value={newitem}
        />
        <Button onClick={addTodoItem} value={newitem}>
          Add
        </Button>
      </div>
    </div>
  );
}
