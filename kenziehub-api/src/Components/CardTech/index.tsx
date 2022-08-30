
import { useState } from "react";
import api from "../../api";

import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import { StyledModal } from "./style";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ITechDelete{
  id: string;
  status: string;
  title: string;
}

interface ITech{
  id: string;
  title: string;
  status: string;
}

export interface IProps{
  tech: ITech;
  userTechs: ITech[];
  setUserTechs: (techs : ITech[]) => void;
}


function CardTech({ tech, userTechs, setUserTechs } : IProps){
  const userToken = window.localStorage.getItem("token");

  const deleteTechs = () => {
    deleteTech(tech)
  };

 

  const deleteTech = (techToDelete : ITechDelete) => {
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
            <IconButton color="primary" size="small" onClick={deleteTechs}>
              <DeleteIcon sx={{ width: "60px", height: "1rem" }} />
            </IconButton>
          </div>
        </li>
      </>
    )
  );
};

export default CardTech;