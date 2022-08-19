import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Dashboard from "../../Components/Dashboard";
import Main from "../../Components/Main";
import api from "../../api.js";
import { StyledDivHome } from "./style";

const Home = () => {
  const params = useParams();

  const [user, setUser] = useState(undefined);

  const [openModalAdd, setOpenModalAdd] = useState(false);

  const [openModalEditDelete, setOpenModalEditDelete] = useState(false);

  const history = useHistory()

  useEffect(() => {
    api
      .get(`/users/${params.id}`)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
        history.push("/404")
      });
  }, []);

  return (
    user && (
      <StyledDivHome>
        <Dashboard name={user.data.name} courseModule={user.data.course_module} />
        <Main
          techs={user.data.techs}
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
          openModalEditDelete={openModalEditDelete}
          setOpenModalEditDelete={setOpenModalEditDelete}
        />
      </StyledDivHome>
    ) 
  );
};

export default Home;