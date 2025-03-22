import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetaisClick(task) {
    const Query = new URLSearchParams();
    Query.set("title", task.title);
    Query.set("description", task.description);
    navigate(`/task?${Query.toString()}`);
  }

  return (
    <ul className=" space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <Button
            onClick={() => onTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 w-full text-left rounded-s-md"
          >
            {task.isComplited && "- "}
            {task.title}
          </Button>
          <Button
            onClick={() => onTaskDelete(task.id)}
            className="bg-slate-400 text-white p-2"
          >
            <TrashIcon />
          </Button>
          <Button
            onClick={() => onSeeDetaisClick(task)}
            className="bg-slate-400 text-white p-2 rounded-e-md"
          >
            <ChevronRightIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
