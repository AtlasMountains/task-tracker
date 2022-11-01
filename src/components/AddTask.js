import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="w-full max-w-xs mx-auto py-2" onSubmit={onSubmit}>
      <div className="mb-4">
        <label
          htmlFor="task"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Task
        </label>
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="day"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Day and Time
        </label>
        <input
          type="text"
          id="day"
          placeholder="Add day & time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4 flex">
        <label
          htmlFor="check"
          className="block text-gray-700 text-sm font-bold"
        >
          Set Reminder
        </label>
        <input
          type="checkbox"
          id="check"
          className="ml-3"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        className="bg-emerald-600 text-white rounded-md p-2 mb-2"
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
