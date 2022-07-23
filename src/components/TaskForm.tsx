import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 } from "uuid";
import { Task } from "../interfaces/Task.interfaces";

interface Props {
  addANewTask: (task: Task) => Array<Object>;
}

const initialState = {
  title: "",
  description: "",
};

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskForm({ addANewTask }: Props) {
  const _id = v4();
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { value, name },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary">
      <form onSubmit={handleNewTask}>
        <h1>Add Task</h1>

        <h6>{_id}</h6>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          onChange={handleInputChange}
          value={task.title}
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          onChange={handleInputChange}
          value={task.description}
          className="form-control shadow-none border-0"
        ></textarea>

        <button className="btn btn-primary d-flex align-items-center">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
