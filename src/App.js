import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import "./App.css";
import DisplayUsers from "./Users/DisplayUsers";

const dummyData = [["Riley", "22"]];

function App() {
  const [data, setData] = useState(dummyData);

  const userData = (userData) => {
    setData((prevData) => [userData, ...prevData]);
    // console.log(data);
    // console.log(userData, "In App.js!");
  };

  return (
    <div>
      <AddUser getData={userData} />
      <DisplayUsers userData={data} />
    </div>
  );
}

export default App;
