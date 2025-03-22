import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Headding from "../components/headding";

function TasksPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-4">
      <div className="w-[500px] space-y-4 mx-auto">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-2.5 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Headding>Detalhes da Tarefa</Headding>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
