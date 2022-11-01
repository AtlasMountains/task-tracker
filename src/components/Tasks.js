import Task from "./Task";

const Tasks = ({ Tasks, onDelete }) => {
  return (
    <ul className="">
      {Tasks.map((task) => (
        <Task task={task} key={task.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Tasks;
