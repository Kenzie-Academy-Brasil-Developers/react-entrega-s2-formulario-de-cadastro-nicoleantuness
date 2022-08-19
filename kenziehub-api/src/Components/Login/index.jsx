
import { useUser } from "../../contexts/users";

import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { HeaderLoginStyle, ContainerStyle, FormStyle, InputStyle } from "./style";
import { theme } from "../../styles/global";


function Login() {

  const { onSubmitFunction, handleSubmit, errors, register, goToRegister } = useUser()
  

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