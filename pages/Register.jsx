import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/authentication/authSlice";
import { toast } from "react-toastify";

const Register = ({ theme }) => {
  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ****SETTING STATE**********//
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // *********DESTRUCTURE STATE***********//
  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ********FORM SUBMIT***********//
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return toast.error("Invalid Password");
    }
    dispatch(registerUser(formData));
    toast.success("user successfully registered!!")
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/")
    }
  }, [user, isSuccess])

  // when regsitering the user//
  if (isLoading) {
    return <h1 className="display-1 text-secondary text-center">Loading........</h1>;
  }

  return (
    <>
      <div className="register">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2>Customer Details!</h2>
          <input
            type="text"
            className="input"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="input"
            placeholder="Enter Email"
            typeof="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1" required
            />
            <label
              className="form-check-label text-align-center"
              htmlFor="defaultCheck1" required
            >
              Agree to Privacy Policy User Agreement & Personal Information
              Collection Statememt
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1" required
            />
            <label
              className="form-check-label text-align-center"
              htmlFor="defaultCheck1" aria-required
            >
              I want to receive news, offers and other promotional materials
              from Samsonite, via text message.
            </label>
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
