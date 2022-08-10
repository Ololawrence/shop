import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.scss";
import useForm from "../Common/formHooks";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const formLogin = () => {};
  const { handleChange, errors, handleSubmit } = useForm(formLogin);
  useEffect(() => { 
     
  }, []);

  return (
    <>
      <p className="info"> Login into your account</p>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
          />

          {errors.email && <p className="error">{errors.email}</p>}
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
          <button type="submit" disabled> register</button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
