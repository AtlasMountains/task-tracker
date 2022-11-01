const Tasks = ({ Tasks }) => {
  return (
    <ul className="">
      {Tasks.map((task) => (
        <li
          className="pl-2 py-1 bg-slate-200 border-t-2 border-black"
          key={task.id}
        >
          <h3 className="font-semibold">{task.text}</h3>
          <h4 className="pl-2 text-sm">{task.day}</h4>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
