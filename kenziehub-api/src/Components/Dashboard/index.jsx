import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../api.js';
import { StyledInfo } from './style';

function Dashboard() {
  const history = useHistory();
  const params = useParams();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    api
      .get(`/users/${params.id}`)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
        history.push('/404');
      });
  }, []);

  return (
    user && (
      <>
        <StyledInfo>
          <h2>Olá, {user.data.name}</h2>
          <p>{user.data.course_module}</p>
        </StyledInfo>
      </>
    )
  );
}

export default Dashboard;
