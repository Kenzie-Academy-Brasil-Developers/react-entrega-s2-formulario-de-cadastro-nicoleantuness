import { createContext, useState, useContext, InputHTMLAttributes, Dispatch, SetStateAction, useEffect } from "react";
 import api from "../../api"
import { DeepRequired, FieldErrorsImpl, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError, AxiosResponse } from "axios";

interface UserTech {
  id?: string;
  title: string;
  status: string; 
}

interface UserValue {
  userToken: string | null;
  userTechs: UserTech[];
  setUserTechs: Dispatch<SetStateAction<UserTech[]>>;
  errors: FieldErrorsImpl<DeepRequired<Data>>;
  register: UseFormRegister<Data>;
  handleSubmit: UseFormHandleSubmit<Data>;
  goToRegister: () => void;
  onSubmitFunction:  (dataUser: Data) => void ;
  onSubmitRegister:  (dataUser: Data) => void ;
  backToLogin: () => void;
}


export const UserContext = createContext<UserValue>({} as UserValue);      

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  children: React.ReactNode;
}

interface Data {
  email: string;
  password: string;
  name?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
}


export const UserProvider = ({ children } : Props) =>  {
    const [ userTechs, setUserTechs ] = useState<UserTech[]>([])
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
    } = useForm<Data>({
      resolver: yupResolver(formSchema),
    });

    

    const onSubmitFunction = (dataUser : Data)  => {
      
      window.localStorage.clear();
      api
        .post("/sessions", dataUser, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response : AxiosResponse) => {
          const userId:string = response.data.user.id;
          window.localStorage.setItem("userId", userId);
  
          const token:string = response.data.token;
          window.localStorage.setItem("token", token);
          
          const userTechs: UserTech = response.data.user.techs
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
        .catch((error : AxiosError) => {
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
    
    const onSubmitRegister = (dataUser: Data) => {
      const newData = Object.entries(dataUser).filter(
        (elem) => elem[0] !== 'confirmPassword'
      );
  
      let data:any = {};
  
      newData.forEach((elem) => {
        let value = elem[1];
        let key = elem[0];
  
        data[key] = value;
      });

        try {
          api
          .post('/users', data, {
            headers: { 'Content-Type': 'application/json' },
          })
          toast.success('Conta criada com sucesso!', {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            position: 'top-right',
            autoClose: 2500,
            progress: undefined,
            theme: 'dark',
          })

          const backLogin = () => {
            history.push('/');
          };
  
          setTimeout(backLogin, 3000)

        } catch (error) {
          console.log(error);
         
            toast.error(
              'Falha no cadastramento! Por favor Tente novamente.',
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
    
    }

        return(
            <UserContext.Provider value={{ userToken, userTechs, setUserTechs, errors, register, goToRegister, onSubmitFunction, handleSubmit, onSubmitRegister, backToLogin }}>
                { children }
            </UserContext.Provider>
        )
}


export const useUser = () => useContext(UserContext)