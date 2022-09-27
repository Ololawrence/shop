import React, { useEffect }from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import useForm from "../Common/formHooks";
import "./Register.scss";

const Register = () => {
  const formLogin = () => {};
  const { handleChange, values, errors, handleRegSubmit } = useForm(formLogin);

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
      navigate("/login");
    }
  });

  return (
    <>
      {auth?.registerStatus === "pending" ? (
        <div className="spinner">{<ClipLoader color="#6ed8af" />}</div>
      ) : null}
      <p className="signup"> register to get started</p>
      <div className="register">
        <form onSubmit={handleRegSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="email"
            onChange={handleChange}
          />

          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit" disabled> register</button>
        </form>
        <p>
          already have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Register;
