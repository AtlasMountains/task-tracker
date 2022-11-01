import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const tasks = [
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
  ];

  return (
    <div className="App min-h-max m-5 border-4 rounded-md border-slate-700">
      <Header title="Task tracker" subtitle="made with react and tailwind" />

      <Tasks Tasks={tasks} />
    </div>
  );
}

export default App;
