import React from "react";
import { useNavigate } from "react-router-dom";
//import Login from "./Login";
function Profile() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Hello World </h1>
      <h3> Welcome! Here is your Profile page </h3>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        {" "}
        Back to Log in Page
      </button>
    </div>
  );
}
export default Profile;
