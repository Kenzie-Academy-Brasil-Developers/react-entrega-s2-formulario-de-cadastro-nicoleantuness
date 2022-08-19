import { useState } from "react";

import api from "../../api.js";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Fade, MenuItem, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledBox,
  StyledForm,
  StyledTextField,
  StyledButton,
  StyledModal,
  StyledSelect,
} from "./style";

function FormAddTech({ userTechs, setUserTechs, techStatus, openModalAdd, setOpenModalAdd }) {
  const [status, setStatus] = useState("Iniciante");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome da tecnologia é obrigatório."),
    status: yup
      .string()
      .required("Por favor selecione seu nível de aprendizado."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const userToken = window.localStorage.getItem("token");

  const onSubmitFunction = (data) => {
    api
      .post(`/users/techs`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setUserTechs([...userTechs, response.data]);
        toast.success("Tecnologia adcionada com sucesso!", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleCloseModalAdd();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado.", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleCloseModalAdd();
      });
  };

  const handleCloseModalAdd = () => {
    reset();
    setOpenModalAdd(false);
  };

  return (
    <>
      {openModalAdd && (
        <StyledModal>
          <Fade in={openModalAdd}>
            <StyledBox>
              <div className="FormAddTech-Box-header">
                <h2>Adcionar tecnologia</h2>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={handleCloseModalAdd}
                >
                  <CloseIcon sx={{ width: "1rem", height: "1rem" }} />
                </IconButton>
              </div>

              <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                <label>
                  Nome da Tecnologia
                  <StyledTextField
                    id="transition-modal-description"
                    sx={{ mt: 2 }}
                    variant="outlined"
                    size="small"
                    color="secondary"
                    placeholder="Nome da tecnologia"
                    {...register("title")}
                    error={errors.title ? true : false}
                    helperText={errors.title ? errors.title.message : null}
                  />
                </label>

                <label>
                  Selecione seu nível de aprendizado dessa tecnologia
                  <StyledSelect
                    id="outlined-select-module"
                    size="small"
                    color="secondary"
                    {...register("status")}
                    value={status}
                    onChange={handleChange}
                  >
                    {techStatus.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </label>
                <StyledButton variant="contained" type="submit">
                  Adcionar tecnologia 
                </StyledButton>
              </StyledForm>
            </StyledBox>
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

export default FormAddTech;