import React, { useEffect, useState, useContext } from "react";
import { Card, Container, Img, Loding, Title } from "./Bodystyle";
import { PhotoContext } from "./stor";
export const Body = ({ getData }) => {
  const [isLoding, setIsloding] = useState(true);
  const [photo, setPhoto] = useContext(PhotoContext);
  console.log(photo, "cont");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((json) => setPhoto(json))
      .then(() => setIsloding(false));
  }, [setPhoto]);

  return (
    <Container>
      {isLoding && <Loding>Loading . . .</Loding>}
      {photo.map(({ id, url, title }) => (
        <Card key={id}>
          <Img src={url} alt="img" />
          <Title>{title}</Title>
          <button>Play</button>
        </Card>
      ))}
    </Container>
  );
};
export default Body;
