import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import api from "../../api.js";

import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { HeaderLoginStyle, ContainerStyle, FormStyle, InputStyle } from "./style";
import { theme } from "../../styles/global";


function Login() {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

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

  return (
    <>
      <HeaderLoginStyle>
        <h1>Kenzie Hub</h1>
      </HeaderLoginStyle>

    <ContainerStyle elevation={3}>
      <h2>Login</h2>

      <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeProvider theme={theme}>
          <label>
            Email
            <InputStyle
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Email"
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : null}
            />
          </label>
          <label>
            Senha
            <InputStyle
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Senha"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
            />
          </label>

          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", width: "100%" }}
            type="submit"
          >
            Entrar
          </Button>
          <div className="div-createAccount">
            <span>Ainda não tem uma conta?</span>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "capitalize", width: "100%" }}
              onClick={goToRegister}
            >
              Cadastre-se
            </Button>
          </div>
        </ThemeProvider>
      </FormStyle>
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
    </ContainerStyle>
    </>
  );
};

export default Login;