import React, { useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show");
  const [task, setTask] = useState([]);
  const url = "https://6352adb1d0bca53a8eb27f5c.mockapi.io/api/task/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show" : "Hide";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <Button
          onClick={(e) => {
            toggle();
          }}
          variant="success"
        >
          {text}
        </Button>
      </div>

      {isOpen && <AddTask />}
      <TaskList task={task} />
    </div>
  );
};

export default Home;
