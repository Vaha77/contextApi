import React, { useState } from "react";
import Move from "./move";
const MoveList = () => {
  const [movie, setMove] = useState([
    { id: 1, name: "Jumong", price: "100$" },
    { id: 2, name: "Mr.Been", price: "200$" },
    { id: 3, name: "Jumanji", price: "500$" },
    { id: 4, name: "Merlin", price: "400$" },
  ]);
  return (
    <div>
      {movie.map((value, index) => {
        return <Move data={value} />;
      })}
    </div>
  );
};

export default MoveList;
