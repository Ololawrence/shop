import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import "./Login.scss";
import useForm from "../Common/formHooks";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const formLogin = () => {};
  const { handleChange, errors, handleSubmit } = useForm(formLogin);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      {auth?.loginStatus === "pending" ? (
        <div className="spinner">{<ClipLoader color="#6ed8af" />}</div>
      ) : null}
      <p className="info"> Login into your account</p>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />

          {errors.username && <p className="error">{errors.username}</p>}
          {auth.loginStatus === "rejected" ? (
            <p className="error">{auth.loginError.data.message}</p>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit" disabled> Login</button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
