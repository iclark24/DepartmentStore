import React from "react";
import { NavLink, } from "react-router-dom";
import {Menu} from "semantic-ui-react"
import { SMenu} from "./styles/main"



const Navbar = () => (
  <SMenu>
    <NavLink exact activeStyle={styles.active} to="/">
      <Menu.Item>Home</Menu.Item>
    </NavLink>
    <NavLink exact activeStyle={styles.active} to="/about">
      <Menu.Item>About</Menu.Item>
    </NavLink>
    <NavLink exact activeStyle={styles.active} to="/departments">
      <Menu.Item>Departments</Menu.Item>
    </NavLink>
  </SMenu>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

export default Navbar;
