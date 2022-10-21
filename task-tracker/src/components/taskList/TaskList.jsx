import React from "react";
import { RiDeleteBack2Fill } from "react";
import axios from "axios";

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { Date, task, id } = item;
        return (
          <div className="mt-3 d-flex justify-content-between bg-secondary rounded-2 p-2 ">
            <div>
              <h4>{task}</h4>
              <p>{Date}</p>
            </div>

            <div>
              <RiDeleteBack2Fill
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
