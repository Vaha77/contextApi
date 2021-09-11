import React, { createContext } from "react";

const Kino = createContext();

export const KinoProvider = (children) => {
  return <Kino.Provider value={"Hello"}>{children}</Kino.Provider>;
};
