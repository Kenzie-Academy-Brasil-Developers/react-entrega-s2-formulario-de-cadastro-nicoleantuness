import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Button, Select } from "@mui/material";

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  inset: 0;
  z-index: 1;
  .ModalEdit-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgb(0 0 0 / 25%);
    border-radius: 4px;
    .ModalEdit-box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #343b41;
      height: 10%;
      padding: 12px 15px;
      border-radius: 4px 4px 0 0;
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #f8f9fa;
      }
    }
  }
`;

export const StyledForm = styled.form`
  padding: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 0.7rem;
    color: #f8f9fa;
    & > div {
      margin-top: 0.8rem;
    }
    input {
      font-size: 0.8rem;
    }
  }
  .placeholder {
    color: white;
  }
`;

export const StyledButton = muiStyles.styled(Button)`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2.4rem;
      padding: 0px 22.3336px;
      border-radius: 4.06066px;
      background-color: #ff577f;
      text-transform: capitalize;
      color: white;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
`;

export const StyledSelect = muiStyles.styled(Select)`
    width: 100%;
    background: #343b41;
    border-radius: 0.3rem;
    color: white;
    font-size: 0.8rem;
    p {
        color: #F8F9FA;
    }
  
`;