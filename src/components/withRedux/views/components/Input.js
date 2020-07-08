import React from "react";

export default props => {
  const handleChange = e => props.onChange(e.target.value);

  const inlineStyle = () => {
    return {
      padding: "5px 10px",
      margin: "10px",
      height: "16px",
      width: "50%"
    };
  };

  return (
    <React.Fragment>
      <input
        type={props.type}
        value={props.value}
        onChange={handleChange}
        style={inlineStyle()}
      />
    </React.Fragment>
  );
};
