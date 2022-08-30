import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import { StyledMain, StyledButton } from "./style";
import { theme } from "../../styles/global";


import FormAddTech from "../FormAddTech";

import CardTech from "../CardTech";
import {ITechs }from "../Dashboard"



const CardMainTech = () => {
  const [userTechs, setUserTechs] = useState<ITechs[]>([] as ITechs[]);
  const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };


  return (
    <StyledMain>
      <ThemeProvider theme={theme}>
        <div className="Main-topDiv">
          <h3>Tecnologias</h3>

          <div className="Main-topDiv-buttons">
            <StyledButton
              aria-label="add"
              onClick={handleOpenModalAdd}
            >
              <AddIcon sx={{ color: "#fff" }} />
            </StyledButton>

            <StyledButton
              aria-label="edit"
            >
              <EditIcon />
            </StyledButton>
          </div>
        </div>
        {userTechs.length !== 0 && (
          <ul className="Main-ul">
            {userTechs.map((tech : ITechs) => {
              return (
                <CardTech
                  key={tech.id}
                  tech={tech}
                  userTechs={userTechs}
                  setUserTechs={setUserTechs}
                />
              );
            })}
          </ul>
        )}

        <FormAddTech
          userTechs={userTechs}
          setUserTechs={setUserTechs}
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
        />

      </ThemeProvider>
    </StyledMain>
  );
};

export default CardMainTech;