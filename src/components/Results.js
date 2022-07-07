import { useState } from "react";
import Form from "./Form";

const Results = ({ name, email, password }) => {
  return (
    <div className="infos">
      <div className="results">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button onClick={() => {}}>Edit your information</button>
    </div>
  );
};

export default Results;
