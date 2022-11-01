import Task from "./Task";

const Tasks = ({ Tasks, onDelete, onToggle }) => {
  return (
    <ul className="">
      {Tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default Tasks;
