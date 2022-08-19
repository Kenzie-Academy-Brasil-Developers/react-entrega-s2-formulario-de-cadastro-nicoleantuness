import { useState } from "react";
import api from "../../api.js";

import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import { StyledModal } from "./style";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardTech({ tech, userTechs, setUserTechs }){
  const userToken = window.localStorage.getItem("token");

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

 

  const deleteTech = (techToDelete) => {
    api
      .delete(`/users/techs/${techToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia deletada com sucesso!", {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "top-right",
          autoClose: 2100,
          theme: "dark",
        });
        const newUserTechs = userTechs.filter((tech) => tech !== techToDelete);
        setUserTechs(newUserTechs);
        setTimeout(closeModal, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    tech && (
      <>
        <li id={tech.id}>
          <h3>{tech.title}</h3>
          <div className="Main-li-right">
            <p>{tech.status}</p>
            <IconButton color="primary" size="small" onClick={openModal}>
              <DeleteIcon sx={{ width: "60px", height: "1rem" }} />
            </IconButton>
          </div>
        </li>
        {modal && (
          <StyledModal>
              <Box className="ModalDelete-box">
                <div className="ModalDelete-box-header">
                  <p>Deletando Tecnologia</p>
                  <IconButton
                    size="small"
                    onClick={deleteTech(tech)}
                  >
                    <CloseIcon sx={{ width: "10px", 
                                     height: "10px" }} />
                  </IconButton>
                </div>
              </Box>
          </StyledModal>
        )}    
      </>
    )
  );
};

export default CardTech;