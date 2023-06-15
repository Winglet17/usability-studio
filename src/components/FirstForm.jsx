import { useContext, useEffect, useState } from "react";
import { AppButton } from "./AppButton";
import { AppForm } from "./AppForm";
import { AppInput } from "./AppInput";
import { AppSelect } from "./AppSelect";
import { LoginContext } from "../App";
import "./FirstForm.css";

export const FirstForm = () => {
  const { login } = useContext(LoginContext);

  const [value, setValue] = useState(login);
  const handleValue = ({ target }) => setValue(target.value);

  useEffect(() => {
    setValue(login);
  }, [login]);

  return (
    <AppForm>
      <div className="form-inputs">
        <AppInput value={value} onChange={handleValue} label="Логин" />
        <AppInput type="password" label="Пароль" />
        <AppSelect label="Интересы" />
      </div>
      <AppButton text="Подтвердить" />
    </AppForm>
  );
};
