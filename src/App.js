import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  // delete task
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create task tracker",
      day: "tuesday 1th at 12:00",
      reminder: false,
    },
    {
      id: 2,
      text: "Publish task tracker",
      day: "tuesday 1th at 16:00",
      reminder: false,
    },
    {
      id: 3,
      text: "Add task tracker project to portfolio",
      day: "tuesday 1th at 20:00",
      reminder: true,
    },
  ]);

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App min-h-max m-5 border-4 rounded-md border-slate-700">
      <Header title="Task tracker" subtitle="made with react and tailwind" />

      {tasks.length > 0 ? (
        <Tasks Tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p className="p-3 bg-red-400">no Tasks</p>
      )}
    </div>
  );
}

export default App;
