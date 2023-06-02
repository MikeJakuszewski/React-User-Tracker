import React from "react";
import Card from "./Card/Card";
import "./DisplayUsers.css";

const DisplayUsers = (props) => {
  console.log(props.userData);

  return (
    <Card className="user-container">
      <div className="user-container__div">
        {props.userData.map((elemt) => (
          <p>
            {elemt[0]} ({elemt[1]} years old)
          </p>
        ))}
      </div>
    </Card>
  );
};

export default DisplayUsers;
