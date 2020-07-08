import "../App.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MenuComponent from "../components/withRedux/views/containers/MenuComponent";
import Todo from "../components/noRedux/Todo";
import TodoWithRedux from "../components/withRedux/views/containers/TodoWithRedux";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";

export default function Dashboard() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    }
  });

  const handleThemeChange = () => {
    setDarkState(darkState);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <MenuComponent menu={{ side: "left", open: true }} />
        <Todo />
        <TodoWithRedux />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
