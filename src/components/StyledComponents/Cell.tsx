import styled from "styled-components";

export const Cell = styled.div<{ isAlive: boolean }>`
  display: inline-block;
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  width: 20px;
  height: 20px;
  background: ${({ isAlive }) => (isAlive ? "black" : "white")};
`;
