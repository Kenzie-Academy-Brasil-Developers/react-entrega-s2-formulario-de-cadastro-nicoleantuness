import { createContext, useState, useContext } from "react";
import api from "../../api.js"
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const UserContext = createContext()

export const UserProvider = ({ children }) =>  {
    const [ userTechs, setUserTechs ] = useState([])
    const userToken = window.localStorage.getItem("token");

    const history = useHistory();

    const goToRegister = () => {
      history.push("/register");
    };

    function backToLogin() {
      window.localStorage.clear();
      history.push("/");
    }

    const formSchema = yup.object().shape({
      email: yup.string().required("Email é obrigatório!").email("Email inválido"),
      password: yup.string().required("Senha é obrigatório!"),
    });

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchema),
      defaultValues: { email: "", password: "" },
    });

    const onSubmitFunction = (dataUser) => {
      console.log(dataUser)
      window.localStorage.clear();
      api
        .post("/sessions", dataUser, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          const userId = response.data.user.id;
          window.localStorage.setItem("userId", userId);
  
          const token = response.data.token;
          window.localStorage.setItem("token", token);
  
          reset();
  
          toast.success("Successful login!", {
            position: "top-right",
            autoClose: 900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
  
          const goToHome = () => {
            history.push(`/home/${userId}`);
          };
  
          setTimeout(goToHome, 1300);
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Login sem sucesso! Por favor cheque se seu email e senha estão corretos",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        });
    };

    const onSubmitRegister = (dataUser) => {
      const newData = Object.entries(dataUser).filter(
        (elem) => elem[0] !== 'confirmPassword'
      );
  
      let data = {};
  
      newData.forEach((elem) => {
        let value = elem[1];
        let key = elem[0];
  
        data[key] = value;
      });
      console.log(data);
      api
        .post('/users', data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          toast.success('Conta criada com sucesso!', {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            position: 'top-right',
            autoClose: 2500,
            progress: undefined,
            theme: 'dark',
          });
  
          const backLogin = () => {
            history.push('/');
          };
  
          setTimeout(backLogin, 3000);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.message === 'Email already exists') {
            toast.error(
              'Email pertence a uma conta existente! Por favor insira um email diferente.',
              {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                position: 'top-right',
                autoClose: 4700,
                theme: 'dark',
              }
            );
          }
        });
    };
    

        return(
            <UserContext.Provider value={{ userToken, userTechs, setUserTechs, errors, register, goToRegister, onSubmitFunction, handleSubmit, onSubmitRegister, backToLogin }}>
                { children }
            </UserContext.Provider>
        )
}

export const useUser = () => useContext(UserContext)