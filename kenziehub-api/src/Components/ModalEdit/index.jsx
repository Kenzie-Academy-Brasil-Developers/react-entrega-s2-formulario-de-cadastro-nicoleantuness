import { useState } from "react";

import api from "../../api.js";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Box, Fade, IconButton, MenuItem } from "@mui/material";

import { StyledButton, StyledForm, StyledModal, StyledSelect } from "./style";

function ModalEdit ({userTechs, techStatus, cardEdit, setCardEdit, openCardEdit }) {
  const userToken = window.localStorage.getItem("token");
  
  const [techTitle, setTechTitle] = useState(
    userTechs.length > 0 ? userTechs[0].title : ""
  );

  const [currentTechStatus, setCurrentTechStatus] = useState("Iniciante");

  const { register, handleSubmit } = useForm();

  

  const onSubmitFunction = (data) => {
    const techToEdit = userTechs.find((tech) => tech.title === data.title);
    const dataObject = {
      status: `${data.status}`,
    };

    const editTech = (resp) => {
      const techToEdit = userTechs.find((tech) => tech.title === resp.data.title);
      techToEdit.status = resp.data.status;
      return techToEdit;
    };
  

    api
      .put(`/users/techs/${techToEdit.id}`, dataObject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        editTech(response);
        toast.success("Tech edited successfully!", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        closeModalEdit();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Something went wrong.", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        closeModalEdit();
      });
  };

  
  const closeModalEdit = () => {
    setCardEdit(false);
  };

  const handleChangeTitle = (event) => {
    setTechTitle(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setCurrentTechStatus(event.target.value);
  };

  return (
    <>
      {cardEdit && (
        <StyledModal>
          <Fade in={cardEdit}>
            <Box className="ModalEdit-box">
              <div className="ModalEdit-box-header">
                <h2>Editar tecnologia</h2>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={closeModalEdit}
                >
                 
                </IconButton>
              </div>

              <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                <label>
                  Por favor selecione uma tecnologia
                  <StyledSelect
                    id="transition-modal-description"
                    sx={{ mt: 2 }}
                    variant="outlined"
                    size="small"
                    color="secondary"
                    placeholder="Tech name"
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    value={techTitle}
                    {...register("title")}
                    onChange={handleChangeTitle}
                  >
                    {userTechs.map((tech) => (
                      <MenuItem key={tech.title} value={tech.title}>
                        {tech.title}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </label>

                <label>
                 Selecione seu nível de aprendizado dessa tecnologia
                  <StyledSelect
                    id="outlined-select-module"
                    size="small"
                    color="secondary"
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    value={currentTechStatus}
                    {...register("status")}
                    onChange={handleChangeStatus}
                  >
                    {techStatus.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </label>
                <StyledButton variant="contained" type="submit">
                  Editar tecnologia
                </StyledButton>
              </StyledForm>
            </Box>
          </Fade>
        </StyledModal>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ModalEdit;