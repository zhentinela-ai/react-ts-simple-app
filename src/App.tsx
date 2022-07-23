import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task.interfaces";
import logo from "./logo.svg";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      completed: false,
      description: "Learn React",
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);
    return tasks;
  };

  const deleteATask = (id: number) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <ul className="nav justify-content-center container">
        <li className="nav-item">
          <a className="navbar-brand active" href="#">
            <img src={logo} alt="React logo" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </li>
      </ul>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
