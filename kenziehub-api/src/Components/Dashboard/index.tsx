/* 
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api";
import { ButtonStyle, StyledInfo, StyledDivHome } from "./style";
import CardMainTech from "../Main";
import { AxiosError, AxiosResponse } from "axios";


interface IParams{
 id: string;
}


export interface ITechs{
  id: string;
  status: string;
  title: string;
}

interface IData{
  name: string;
  course_module: string;
  techs: ITechs[];
}

export interface IUser{
        data: IData;
       }

function Dashboard() {
  const params = useParams<IParams>();
 
  const history = useHistory()

  const [user, setUser] = useState<IUser>({} as IUser);
  const [tech, setTechs] = useState<ITechs[]>([]);

  useEffect(() => {
    api
      .get(`/users/${params.id}`)
      .then((response : AxiosResponse) => {
        setUser(response);
        setTechs(response.data.user.techs)
      })
      .catch((error :  AxiosError) => {
        console.log(error);
        history.push("/404");
      });

      
  }, []);

  function backToLogin() {
    window.localStorage.clear();
    history.push("/");
  }

  return (
    user && (
      <>
        <ButtonStyle onClick={backToLogin}>
            Sair
        </ButtonStyle>
        
          <StyledInfo>
            <h2>Olá, {user.data.name}</h2>
            <p>{user.data.course_module}</p>
          </StyledInfo>
        <StyledDivHome>
          <CardMainTech />
        </StyledDivHome>
      </>
    )
  );
} 
export default Dashboard;
*/

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api";
import { ButtonStyle, StyledInfo, StyledDivHome } from "./style";
import CardMainTech from "../Main";

export interface ITechs{
  id: string;
  status: string;
  title: string;
}

interface IParams{
  id: string;
 }

 interface IData{
  name: string;
  course_module: string;
  techs: ITechs[];
}

 export interface IUser{
  data: IData;
 }


function Dashboard() {
  const params = useParams<IParams>();

  const history = useHistory()
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    api
      .get(`/users/${params.id}`)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });


  }, []);

  function backToLogin() {
    window.localStorage.clear();
    history.push("/");
  }

  return (
    user && (
      <>
        <ButtonStyle onClick={backToLogin}>
            Sair
        </ButtonStyle>
        
          <StyledInfo>
            <h2>Olá, {user.data.name}</h2>
            <p>{user.data.course_module}</p>
          </StyledInfo>
        <StyledDivHome>
          <CardMainTech />
        </StyledDivHome>
      </>
    )
  );
}

export default Dashboard;

