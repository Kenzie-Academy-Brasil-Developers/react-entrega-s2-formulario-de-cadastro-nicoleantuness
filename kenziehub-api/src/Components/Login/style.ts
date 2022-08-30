import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Paper, TextField } from "@mui/material";


export const HeaderLoginStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Inter", sans-serif;
    color: #ff577f;
    font-size: 1.35rem;
  }
`;

export const ContainerStyle = muiStyles.styled(Paper)`
    background-color: #212529;
    color: white;
    border-radius: 5px;
    box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    header {
        margin-bottom: 1.25rem;
    }
    h2 {
        font-weight: 700;
        font-size: 0.902rem;    
         margin-top: 2rem;
    }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 80%;
  padding: 5px;
  border: none;
  display: flex;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 11px;
    color: #f8f9fa;
    & > div {
      margin-top: 0.8rem;
    }
  }
  input {
    font-size: 0.8rem;
  }
  .div-createAccount {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 4rem;
    justify-content: space-between;
    margin-bottom: 2rem;
    span {
      font-size: 0.8rem;
      color: #868e96;
      font-weight: 600;
    }
  }
`;

export const InputStyle = muiStyles.styled(TextField)`
    width: 100%;
  input {
    color: #F8F9FA;
    background-color: #343B41;
    border-radius: 0.3rem;
  }
 
`;