import React from "react";
import img from "../../assets/task.png";

const Header = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <div>
        <img src={img} alt="" width={"100px"} />
      </div>
      <h1 style={{color:"white"}} className="display-5">TASK TRACKER</h1>
    </div>
  );
};

export default Header;
