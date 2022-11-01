import Button from "./Button";

const Header = ({ title, subtitle, onAdd, showAdd }) => {
  return (
    <header className="p-2 flex justify-evenly">
      <div>
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <h2 className="text-center">{subtitle}</h2>
      </div>

      <Button
        text={showAdd ? "close" : "Add Task"}
        color={showAdd ? "bg-red-500" : "bg-slate-700"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
