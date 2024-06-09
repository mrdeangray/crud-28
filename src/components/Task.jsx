import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import CirclePercent from "./CirclePercent";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import CheckIcon from "./icons/CheckIcon";

const Task = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
  }, []);

  const getScore = async () => {
    try {
      const { data } = await axios(`https://api.github.com/users/${task.name}`);
      setScore(data.public_respos);
    } catch (error) {}
  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((tk) => {
      if (tk.id === task.id) {
        tk.subtasks[index].completed = !tk.subtasks[index].completed;
        tk.percentCompleted = calcPercentComplete(tk.subtasks);
      }
      return tk;
    });
    setTasks(newTasks);
    localStorage.setItem("crud-25", JSON.stringify(newTasks));
  };
  const calcPercentComplete = (subtasks) => {
    const percent =
      (subtasks.filter((sub) => sub.completed).length / subtasks.length) * 100;
    return Math.round(percent);
  };
  return (
    <div className="box">
      <h3>{task.name}</h3>
      <p>score:{score}</p>
      <p style={{ color: "blue", fontSize: "20px" }}>
        {task.percentCompleted}%
      </p>
      <CirclePercent radius="20" percentage={task.percentCompleted} />
      {/* <p>
        Past Due:{" "}
        {task.dueDateTime.toDate().getTime() < new Date().getTime()
          ? "Yes"
          : "No"}
      </p> */}
      {task.subtasks.map((subtask, index) => {
        return (
          <p
            key={index}
            style={{
              textDecoration: subtask.completed ? "line-through" : "none",
            }}
            onClick={() => toggleCompleted(index)}
          >
            {subtask.name}
          </p>
        );
      })}
      <p>Priorty: {task.priority}</p>
      <p>Complexity: {task.complexity}</p>
      <p>Category: {task.category}</p>
      {/* <div className="edit-icon-container">
        <EditIcon />
      </div> */}

      <div className="task-buttons">
        <Link to={`/updatetask/${task.id}`}>
          <EditIcon />
        </Link>
        <Link to={`/updatetask/${task.id}`}>
          <CheckIcon />
        </Link>
        <Link to={`/deletetask/${task.id}`}>
          <DeleteIcon />
        </Link>
      </div>
    </div>
  );
};

export default Task;
