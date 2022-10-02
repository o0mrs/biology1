

import {
  Routes,
  Route,
  
} from "react-router-dom";
import Ai from "./com/ai";
import Auth from "./com/auth";
import Chat from "./com/chat";
import Home from "./com/home";

function App() {

  return (

<Routes>
      <Route path="/" element={<Chat />}></Route>
      </Routes>
  );
}

export default App;