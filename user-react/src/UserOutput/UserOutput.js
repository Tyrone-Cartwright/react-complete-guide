import React from "react";
import "./UserOuput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        voluptates cupiditate, itaque vitae maxime quaerat!
      </p>
    </div>
  );
};

export default userOutput;
