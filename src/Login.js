import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button
        onClick={() => {
          navigate("/Profile");
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Login;
