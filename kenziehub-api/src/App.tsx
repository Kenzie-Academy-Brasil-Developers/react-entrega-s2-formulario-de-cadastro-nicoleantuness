import { useState } from "react";
import RoutesMain from "./Routes/index.jsx";

import GlobalStyle from "./styles/global";
import "./App.css";

function App() {
  const [homePage, setHomePage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain homePage={homePage} setHomePage={setHomePage} setLoginPage={setLoginPage} />
    </div>
  );
}

export default App;