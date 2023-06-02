import React, { useState } from "react";
import Card from "./Card/Card";
import "./AddUser.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [leftBlank, setLeftBlank] = useState(false);

  const ageHandler = (event) => {
    setAge(event.target.value);
    setLeftBlank(false);
  };

  const useNameHandler = (event) => {
    setUserName(event.target.value);
    setLeftBlank(false);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length <= 0 || age.trim().length <= 0) {
      setLeftBlank(true);
      return;
    }
    if (Number(age) < 0) return;

    props.getData([userName, age]);
    setUserName("");
    setAge("");
  };

  return (
    <Card className="user-container">
      <form onSubmit={clickHandler} className="user-container__form">
        <label style={{ color: !leftBlank ? "black" : "red" }}>Username</label>
        <input value={userName} type="text" onChange={useNameHandler} />
        <label style={{ color: !leftBlank ? "black" : "red" }}>
          Age(Years)
        </label>
        <input value={age} type="number" onChange={ageHandler} />
        <button className="user-container__button" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
