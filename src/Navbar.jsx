import React from "react";
import { Container, Item } from "./navbarStyle";

export const Navbar = () => {
  return (
    <Container>
      <Item>O'zbek Kinno</Item>
      <Item>Horij Kino</Item>
      <Item>Tarjima Kino</Item>
      <Item>
        Barch Kinolar
        {/* <span> {data?.length || 0} </span> */}
      </Item>
    </Container>
  );
};
export default Navbar;
