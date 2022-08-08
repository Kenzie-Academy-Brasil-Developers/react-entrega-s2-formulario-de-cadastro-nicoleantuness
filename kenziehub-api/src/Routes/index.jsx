import { Switch, Route } from 'react-router-dom';

import Login from '../Components/Login';
import Cadastrar from '../Components/Cadastrar';

const RoutesMain = ({ loginPage, setLoginPage }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Cadastrar loginPage={loginPage} setLoginPage={setLoginPage} />
        </Route>
      </Switch>
    </>
  );
};
export default RoutesMain;
