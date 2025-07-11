import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import Theme from "./components/Theme";

// step-1 => create context for user
const userContext = createContext();

function App() {

  const[user,setUser] = useState({name:"Ronak Vekariya"})
  return (
    <div>
      <userContext.Provider value={user}>
        <ChildA />
      </userContext.Provider>
      <Theme/>
    </div>
  );
}

export default App;
export {userContext}