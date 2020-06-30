
import '../App.css';
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import LeftMenu from '../components/MenuComponent'

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
    setDarkState(!darkState);
  };
  
  return (
    <ThemeProvider theme={darkTheme}>
        <Header />
        <LeftMenu menu={{side: 'left', open: true}}/>
        <LeftMenu menu={{side: 'right', open: true}}/>
        <Footer />
    </ThemeProvider>
  );
}

