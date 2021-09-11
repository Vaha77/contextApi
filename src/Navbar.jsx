import React from "react";
import { Container, Item } from "./navbarStyle";

export const Navbar = ({ list }) => {
  return (
    <Container>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>
        All Movies
        <span> {list?.length || 0} </span>
      </Item>
    </Container>
  );
};
export default Navbar;
