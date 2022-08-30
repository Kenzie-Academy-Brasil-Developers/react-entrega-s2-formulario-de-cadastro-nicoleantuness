import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";

import { Button } from "@mui/material";

export const ButtonStyle = muiStyles.styled(Button)`
    background-color: #212529;
    color: white;
    width: 79px;
    text-transform: capitalize;
    font-size: 12px;
    display:flex;
    &:hover {
        background-color: #343B41;
    }
`;

export const StyledInfo = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 19%;
  margin-top: 35px;
  padding: 33px 12px 26px 12px;
  gap: 14px;
  border-top: 1px solid pink;
  border-bottom: 1px solid pink;
  h2 {
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    color: #868e96;
  }
`;

export const StyledDivHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 0 0.5rem;
  nav {
    background-color: #121214;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 22px 15px;
    z-index: 1;
  }
`;