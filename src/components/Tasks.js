import Task from "./Task";

const Tasks = ({ Tasks }) => {
  return (
    <ul className="">
      {Tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default Tasks;
