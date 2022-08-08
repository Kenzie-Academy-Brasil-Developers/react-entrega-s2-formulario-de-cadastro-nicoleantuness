import { Switch, Route } from 'react-router-dom';

import Login from '../Components/Login';
import Cadastrar from '../Components/Cadastrar';
import Dashboard from '../Components/Dashboard';

const RoutesMain = ({ homePage, setHomePage, loginPage, setLoginPage }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Cadastrar loginPage={loginPage} setLoginPage={setLoginPage} />
        </Route>

        <Route exact path="/home/:id">
          <Dashboard homePage={homePage} setHomePage={setHomePage} />
        </Route>
      </Switch>
    </>
  );
};
export default RoutesMain;
