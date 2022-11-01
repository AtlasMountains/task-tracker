const AddTask = () => {
  return (
    <form className="w-full max-w-xs mx-auto py-2">
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
          className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4 flex">
        <label
          htmlFor="check"
          className="block text-gray-700 text-sm font-bold"
        >
          Set Reminder
        </label>
        <input type="checkbox" id="check" className="ml-3" />
      </div>

      <input
        className="bg-green-500 rounded-md p-2 mb-2"
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
