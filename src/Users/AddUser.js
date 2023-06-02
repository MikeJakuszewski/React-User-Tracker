import React, { useState } from "react";
import Card from "./Card/Card";
import "./AddUser.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const useNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    props.getData([userName, age]);
    setUserName("");
    setAge("");
  };

  return (
    <Card className="user-container">
      <form onSubmit={clickHandler} className="user-container__form">
        <label> Username </label>
        <input value={userName} type="text" onChange={useNameHandler} />
        <label> Age(Years) </label>
        <input value={age} type="number" onChange={ageHandler} />
        <button className="user-container__button" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
