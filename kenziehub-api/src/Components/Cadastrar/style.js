import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Paper, Select, TextField } from "@mui/material";
import { Button } from "@mui/material";
export const RegisterStyle = muiStyles.styled(Paper)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 370px; 
    height: 100%;
    margin-top: 60px;
    background-color: #212529;
    color: white;
    border-radius: 7px;
    margin-bottom: 30px;
    .RegisterInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        & > h1 {
            margin-top: 42px;
            margin-bottom: 12px;
            font-weight: 700;
            font-size: 18px;    
        }
        & > p {
            font-weight: 400;
            font-size: 12px;
            color: #868E96;
        }
    }
`;

export const InputStyle = muiStyles.styled(TextField)`
    width: 100%;
    input {
    color: #F8F9FA;
    background-color: #343B41;
    border-radius:  7px;
    margin-bottom: 20px;

}
  
    p {
        color: #F8F9FA;
        margin-left: 20px;
    }
`;

export const SelectStyle = muiStyles.styled(Select)`
    width: 100%;
    background: #343b41;
    border-radius: 0.3rem;
    color: white;
    font-size: 12px;
    p {
        color: #F8F9FA;
    }
  
`;

export const HeaderStyle = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  h1 {
    font-family: "Inter", sans-serif;
    color: #ff577f;
    font-size: 1.25rem;
  }
`;

export const ButtonStyle = muiStyles.styled(Button)`
    background-color: #212529;
    color: white;
    width: 79px;
    text-transform: capitalize;
    font-size: 12px;
    
    &:hover {
        background-color: #343B41;
    }
`;

export const ButtonCreateStyle = muiStyles.styled(Button)`
    background-color: #FF577F;
    &:hover {
      background-color: #59323F;
  }
`