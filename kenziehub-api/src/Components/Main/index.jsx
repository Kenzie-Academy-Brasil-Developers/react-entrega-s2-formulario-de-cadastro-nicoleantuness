import { useState } from "react";

import FormAddTech from "../FormAddTech";
import CardTech from "../CardTech";

import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { StyledMain, StyledButton } from "./style";
import { theme } from "../../styles/global";

const CardMainTech = ({ techs, openModalAdd, setOpenModalAdd }) => {
  const [ userTechs, setUserTechs ] = useState([])



  const modalAdd = () => {
    setOpenModalAdd(true);
  };

  const techStatus = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    {
      value: "Intermediário",
      label: "Intermediário",
    },
    {
      value: "Avançado",
      label: "Avançado",
    },
  ];

  return (
    <StyledMain>
      <ThemeProvider theme={theme}>
        <div className="Main-topDiv">
          <h3>Tecnologias</h3>

          <div className="Main-topDiv-buttons">
            <StyledButton
              variant="filled"
              aria-label="add"
              onClick={modalAdd}
            >
              <AddIcon sx={{ color: "#fff" }} />
            </StyledButton>

            <StyledButton
              variant="filled"
              aria-label="edit"
              
            >
              <EditIcon />
            </StyledButton>
          </div>
        </div>
        {userTechs.length !== 0 && (
          <ul className="Main-ul">
            {userTechs.map((tech) => {
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
          techStatus={techStatus}
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
