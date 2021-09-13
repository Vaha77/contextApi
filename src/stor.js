import React, { createContext, useState } from "react";
export const PhotoContext = createContext();

export const Stor = ({ Children }) => {
  const [photo, setPhoto] = useState([]);
  return (
    <PhotoContext.Provider value={[photo, setPhoto]}>
      {Children}
    </PhotoContext.Provider>
  );
};
export default Stor;
