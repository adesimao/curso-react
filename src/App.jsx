import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Headding from "./components/headding";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isComplited: !task.isComplited };

      return task;
    });

    setTasks(newTask);
  }

  function onTaskDelete(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks[0] ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description,
      isComplited: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="max-w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Headding>Gerenciador De Tarefas</Headding>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
