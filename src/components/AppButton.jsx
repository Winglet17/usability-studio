import "./AppButton.css"

export const AppButton = ({ text, ...props }) => {
  return <button className="app-button" {...props}>{text}</button>;
};
