import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./Register.scss";
import { registerUser } from "../../features/authSlice";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  

  useEffect(() => {
    if (auth.registerStatus === "rejected") {
      toast.info(auth.registerError.message, {
        position: "top-right",
      });
    }

    if (auth.registerStatus === "success") {
      toast.success(auth.token.message, {
        position: "top-right",
      });
    }

    if (auth.token) {
      navigate("/");
      console.log("user already logged in");
    }
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };
  return (
    <>
      <p className="signup"> register to get started</p>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit" disabled > register</button>
        </form>
        <p>
          already have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Register;
