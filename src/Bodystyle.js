import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid blue;
  width: 200px;
  height: 280px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.div`
  padding: 5px;
  text-align: center;
`;
