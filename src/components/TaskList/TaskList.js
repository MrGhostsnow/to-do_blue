import React, { useState, useEffect } from "react";
import Button from "../Form/Button";
import FormControl from "../Form/FormControl";
import TaskForm from "../Form/TaskForm";
import "./TaskList.css";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({
    task_id: "",
  });
  const [newTask, setNewTask] = useState({
    task: "",
  });
  const [search, setSearch] = useState("");

  const baseURL = "http://localhost:8000/tasks";

  async function findAllTasks() {
    const response = await fetch(baseURL);
    const tasks = await response.json();
    setTaskList(tasks);
  }

  async function findById(id) {
    const response = await fetch(`${baseURL}/${id}`);
    const task = await response.json();
    setTaskList([task]);
  }

  async function create(task) {
    const response = await fetch(baseURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTaskList([newTask]);
  }

  // useEffect(()=> {
  //     findById()
  // }, [])

  useEffect(() => {
    findAllTasks();
  }, [newTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleChangeCreate = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    findById(task.task_id);
  };

  const handleCreateTask = () => {
    const task_create = { ...newTask };
    create(task_create);
    setNewTask({
      task: "",
    });
  };

  return (
    <div className="taskList">
      <div className="container_Task">
        <FormControl
          id="FindoneTask"
          label="Search "
          type="text"
          onChange={handleChange}
          name="task_id"
          value={task.task_id}
        />
        <Button
          type="button"
          className={`btn btn-primary`}
          onClick={handleClick}
          label="Search"
        />

        <TaskForm
          onChange={handleChangeCreate}
          descricao_value={newTask.task}
          onClick={handleCreateTask}
          label={"Add new Task"}
        />
        {taskList.map((task, index) => (
          <>
            <div key={index} className="card_Task">
              <div className="card_Body">
                <p className="card_Text">{task.task}</p>
              </div>
              <Button type="button" className={`btn-delete`} label="delete" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
