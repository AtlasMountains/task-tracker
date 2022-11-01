import Button from "./Button";

const Header = ({ title, subtitle }) => {
  const onClick = () => {
    console.log("Add task btn clicked");
  };

  return (
    <header className="p-2 flex justify-evenly">
      <div>
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <h2 className="text-center">{subtitle}</h2>
      </div>

      <Button text="Add task" color="bg-slate-700" onClick={onClick} />
    </header>
  );
};

export default Header;
