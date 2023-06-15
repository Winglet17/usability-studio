import "./AppSelect.css"

export const AppSelect = ({ label }) => {
  return (
    <label className="app-input-label">
      {label}
      <select className="app-select">
        <option>Кино</option>
        <option>Музыка</option>
        <option>Программирование</option>
      </select>
    </label>
  );
};
