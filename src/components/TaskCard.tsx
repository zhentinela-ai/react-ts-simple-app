import { Task } from "../interfaces/Task.interfaces";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div>
      <div
        className="card card-body bg-primary rounded-0 text-light"
      >
        <p>{task.id}</p>
        <h2 className="">{task.title.toLocaleUpperCase()}</h2>
        <p>{task.description}</p>
        <button
          onClick={() => task.id && deleteATask(task.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
