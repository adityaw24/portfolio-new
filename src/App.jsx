import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header, Home } from "./components";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  List,
} from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      {/* <Toolbar /> */}
      <Home />
    </>
  );
}

export default App;
