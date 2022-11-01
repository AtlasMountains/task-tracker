import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li
      className={`flex justify-between content-center pl-2 px-3 py-1 select-none ${
        task.reminder ? "bg-amber-500" : "bg-slate-200"
      } border-t-2 border-black`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h3 className="font-semibold">{task.text}</h3>
        <h4 className="pl-2 text-sm">{task.day}</h4>
      </div>
      <div className="text-red-500 my-auto">
        <FaTimes onClick={() => onDelete(task.id)} className="cursor-pointer" />
      </div>
    </li>
  );
};

export default Task;
