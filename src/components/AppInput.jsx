import "./AppInput.css";

export const AppInput = ({label, ...props}) => {
  return (
    <label className="app-input-label">
      {label}
      <input type="text" className="app-input" {...props}/>
    </label>
  );
};
