import React from "react";

export default props => {
  const handleClick = e => props.onClick(props.value);

  const inlineStyle = () => {
    return {
      padding: "5px 20px",
      margin: "10px",
      height: "30px",
      backgroundColor: "lightblue",
      border: "1px solid darkblue"
    };
  };

  return (
    <React.Fragment>
      <button onClick={handleClick} style={inlineStyle()}>
        {props.children}
      </button>
    </React.Fragment>
  );
};
