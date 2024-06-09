import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";
import Task from "./Task";
import DropDownMenu from "./DropDownMenu";

const ReadTasks = () => {
  const { tasks } = useContext(TaskContext);
  const [powerModeOn, setPowerModeOn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const sortOptions = {
    ascending: (a, b) => a.name.localeCompare(b.name),
    descending: (a, b) => b.name.localeCompare(a.name),
  };


  Array.prototype.inState.lowerCase = function () {
    let i;
    for (i = 0; i < this.length; i++) {
      this[i] = this[i].toLowerCase();
    }
  };
  
  function myGeeks() {
    let sub = ["DSA", "WEBTEchnologies",
      "GeeksforGeeks", "gfg"];
    sub.lowerCase();
  
    console.log(sub);
  }
  myGeeks();
  

  useEffect(() => {
    const allCategories = [...new Set(tasks.map((task) => task.category))];
    // console.log(allCategories);
    setCategories(allCategories);
  }, []);



  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h3>ReadTasks</h3>
      <button
        className="power-mode-btn"
        onClick={() => setPowerModeOn(!powerModeOn)}
      >
        {powerModeOn ? "Turn Off Power Mode" : "Turn On Power Mode"}
      </button>
      <DropDownMenu
        options={Object.keys(sortOptions)}
        selectedOption={selectedSortOption}
        setSelectedOption={setSelectedSortOption}
        title="Sort"
      />

      <DropDownMenu
        options={categories}
        selectedOption={selectedCategory}
        setSelectedOption={setSelectedCategory}
        title="Category"
      />

      <div className="all-tasks">
        {(!selectedCategory
          ? tasks
          : tasks.filter((task) => task.category === selectedCategory)
        )
          .sort(sortOptions[selectedSortOption])
                    // .find((task) => task.category === "music").toArray()
          .map((task) => {
            if(powerModeOn){
              return <Task key={task.id} task={task} />;
            }
            else{
              return <Task key={task.id} task={task} />;
            }
            
          })}
      </div>

      <Link to={`/createtask`}>
        <button style={{ marginTop: "40px" }}>Create Task</button>
      </Link>
    </div>
  );
};

export default ReadTasks;
