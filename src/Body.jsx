import React, { useEffect, useState } from "react";
import { Card, Container, Img, Title } from "./Bodystyle";

export const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Container>
      {data.map(({ id, url, title }) => (
        <Card key={id}>
          <Img src={url} alt="img" />
          <Title>{title}</Title>
        </Card>
      ))}
    </Container>
  );
};
export default Body;
