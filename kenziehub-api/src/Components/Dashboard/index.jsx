import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api.js";
import { ButtonStyle, StyledInfo, StyledDivHome } from "./style";
import Main from "../../Components/Main";

function Dashboard() {
  const params = useParams();
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEditDelete, setOpenModalEditDelete] = useState(false);
 
  const history = useHistory()
  const [user, setUser] = useState(undefined);

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
          <Main
            techs={user.data.techs}
            openModalAdd={openModalAdd}
            setOpenModalAdd={setOpenModalAdd}
            openModalEditDelete={openModalEditDelete}
            setOpenModalEditDelete={setOpenModalEditDelete}
          />
        </StyledDivHome>
      </>
    )
  );
}

export default Dashboard;
