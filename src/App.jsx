import React from "react";
import { Container } from "./appStyle";
import Body from "./Body";
import Navbar from "./Navbar";

export const App = () => {
  return (
    <Container>
      <Navbar />
      <Body />
    </Container>
  );
};

export default App;
