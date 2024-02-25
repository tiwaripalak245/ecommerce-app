import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authentication/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));

  };

useEffect(() => {
  if (user || isSuccess) {
    navigate('/')
  }
}, [user, isSuccess])




  if (isLoading) {
    return <h1 className="display-5 text-align-center">Loading....</h1>;
  }

  return (
    <>
      <div className="profile">
        <div className="login-img">
          <h1>Welcome Back! Log in to Your Stylish World.</h1>
          <h6>
            Discover the latest trends in fashion. Log in to your account and
            explore <br /> a world of exclusive clothing, personalized
            recommendations, and <br />
            seamless shopping experiences. Your style journey starts here
          </h6>
        </div>
        <form className="login-container" onSubmit={handleSubmit}>
          <h3> Login or Sign up </h3>
          <input
            type="text"
            placeholder="Email Address , Phone Number"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="passwsord"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <span>
            <button type="submit" onClick={handleSubmit}>Login</button>
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </span>
          <p>Having trouble logging in? Get help</p>
        </form>
      </div>
    </>
  );
};

export default Login;
