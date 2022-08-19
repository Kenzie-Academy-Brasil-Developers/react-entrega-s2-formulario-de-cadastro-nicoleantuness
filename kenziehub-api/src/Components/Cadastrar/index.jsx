import * as yup from 'yup';
import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MenuItem } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';

import { useUser } from '../../contexts/users/index.js';

import {
  HeaderStyle,
  ButtonStyle, 
  RegisterStyle,
  InputStyle,
  SelectStyle,
  ButtonCreateStyle,
} from './style';

function FormRegister({ loginPage, setLoginPage }) {
  const { onSubmitRegister,backToLogin } = useUser()
  const history = useHistory();
  
  const [module, setModule] = useState('Primeiro módulo');

  const handleChange = (event) => {
    setModule(event.target.value);
  };


  const formSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup
      .string()
      .required('Senha é obrigatório')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: yup
      .string()
      .required('Por favor confirme sua senha')
      .oneOf([yup.ref('password')], 'Senhas diferentes'),
    bio: yup.string().required('Bio é obrigatório'),
    contact: yup.string().required('Contato é obrigatório'),
    course_module: yup.string().required('Por favor selecione o seu módulo'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      bio: '',
      contact: '',
      course_module: '',
    },
  });

  useEffect(() => {
    isSubmitSuccessful && reset();
    
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (history.location.pathname.includes("/home/")) {
      setLoginPage(true);
    }
  }, []);



  return (
    <>
    <HeaderStyle>
        <h1>KenzieHub</h1>

        <ButtonStyle onClick={backToLogin}>
          Voltar
        </ButtonStyle>
      </HeaderStyle>
    <RegisterStyle>
      <div className="RegisterInfo">
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>
      </div>

      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <label>
          <p>Nome</p> 
          <InputStyle
            variant="outlined"
            size="small"
            color="secondary"
            placeholder="Digite aqui seu nome"
            {...register('name')}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : null}
          />
        </label>
        <label>
        <p>Email</p>          
          <InputStyle
            size="small"
            placeholder="Digite aqui seu email"
            {...register('email')}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
          />
        </label>
        <label>
          <p>Senha</p> 
          <InputStyle
            size="small"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register('password')}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : null}
          />
        </label>
        <label>
          <p>Confirmar senha</p>
          <InputStyle
            size="small"
            placeholder="Digite novamente sua senha"
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword ? true : false}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : null
            }
          />
        </label>
        <label>
        <p>Bio</p>
          <InputStyle
            size="small"
            placeholder="Fale sobre você"
            {...register('bio')}
            error={errors.bio ? true : false}
            helperText={errors.bio ? errors.bio.message : null}
          />
        </label>
        <label>
          <p>Contato</p>
          <InputStyle
            size="small"
            placeholder="Opção de contato"
            {...register('contact')}
            error={errors.contact ? true : false}
            helperText={errors.contact ? errors.contact.message : null}
          />
        </label>
        <label>
          <p>Selecionar módulo</p>
          <SelectStyle
            id="outlined-select-module"
            size="small"
            {...register('course_module')}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
            value={module}
            onChange={handleChange}
          >
              <MenuItem key={0} value='Primeiro módulo (Introdução ao Frontend)'>
              Primeiro módulo
              </MenuItem>
              <MenuItem key={1} value='Segundo módulo (Frontend intermediário)'>
              Segundo módulo
              </MenuItem>
              <MenuItem key={2} value='Terceiro módulo (Frontend avançado)'>
              Terceiro módulo
              </MenuItem>
              <MenuItem key={3} value='Quarto módulo (Introdução ao Backend)'>
              Quarto módulo
              </MenuItem>
              <MenuItem key={4} value='Quinto módulo (Backend intermediário)'>
              Quinto módulo
              </MenuItem>

          </SelectStyle>
        </label>

        <ButtonCreateStyle
          variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
              width: "100%",
              mt: "0.6rem",
              mb: "0.6rem",
            }}
          type="submit"
        >
          Create your account
        </ButtonCreateStyle>
      </form>
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        position="top-right"
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </RegisterStyle>
    </>
  );
};

export default FormRegister;
