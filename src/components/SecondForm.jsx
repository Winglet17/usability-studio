import { AppButton } from "./AppButton";
import { AppForm } from "./AppForm";
import { AppInput } from "./AppInput";
import { LoginContext } from "../App";
import { useContext } from "react";

export const SecondForm = () => {
  const { login, setLogin } = useContext(LoginContext);

  const handleLogin = ({ target }) => setLogin(target.value);

  return (
    <AppForm>
      <div className="form-inputs">
        <AppInput value={login} onChange={handleLogin} label="Логин" />
      </div>
      <AppButton text="Поиск" />
    </AppForm>
  );
};
