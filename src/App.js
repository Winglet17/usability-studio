import { createContext, useState } from "react";
import "./App.css";
import { FirstForm } from "./components/FirstForm";
import { SecondForm } from "./components/SecondForm";

export const LoginContext = createContext();

function App() {
  const [login, setLogin] = useState("");
  return (
    <div className="app">
      <LoginContext.Provider
        value={{
          login,
          setLogin,
        }}
      >
        <FirstForm />
        <SecondForm />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
