import styled from "styled-components";

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