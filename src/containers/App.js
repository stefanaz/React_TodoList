
import '../App.css';
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MenuComponent from '../components/MenuComponent'
import Todo from '../components/noRedux/Todo'
import TodoWithRedux from '../components/withRedux/TodoWithRedux'

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";

export default function Dashboard() {

  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const handleThemeChange = () => {
    setDarkState(darkState);
  };
  
  
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
          <Header />
            {/* <MenuComponent menu={{side: 'left', open: true}}/> */}
            {/* <MenuComponent menu={{side: 'right', open: true}}/> */}
          <div style={{margin: '10px', marginTop: '40px'}}> <h3>No REDUX: </h3></div>
          <Todo/>
          <div style={{margin: '10px', marginTop: '40px'}}> <h3>With REDUX now: </h3></div>
          <TodoWithRedux/>
          <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

