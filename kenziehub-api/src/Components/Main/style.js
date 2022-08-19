import { Button } from "@mui/material";
import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .Main-topDiv {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .Main-topDiv-buttons {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
  .Main-ul {
    list-style: none;
    width: 90%;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    margin-top: 21px;
    padding: 22px 9px;
    border-radius: 4px;
    gap: 15px;
    li {
      background-color: #121214;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 13px 15px;
      &:hover {
        background-color: #343b41;
        .Main-li-right > p {
          color: #f8f9fa;
        }
      }
      h4 {
        font-weight: 700;
        font-size: 14.2123px;
      }
      .Main-li-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.3rem;
        p {
          font-weight: 400;
          font-size: 12.182px;
          color: #868e96;
        }
      }
    }
  }
`;

export const StyledButton = muiStyles.styled(Button)`
    background-color: #212529;
    min-width: 0;
    width: 37px;
    &:hover {
        background-color: #343B41;
    }
`;