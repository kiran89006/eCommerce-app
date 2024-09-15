import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePassword, updateUserId } from "./Redux/Login/actionCreaters";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const { userId, password } = useSelector((state) => {
    return state.loginReducer;
  });

  const dispatch = useDispatch();

  const handleFn = () => {
    //navigate("/home");
    const data = { username: userId, password: password };
    const headers = { "Content-Type": "application/json" };

    axios
      .post("https://dummyjson.com/auth/login", data, {
        headers,
      })
      .then((res) => {
        // console.log("res", res);
        localStorage.setItem("usersData", JSON.stringify(res.data));

        navigate("/");
        // console.log("stringifiedres", res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: userId,
    //     password: password,
    //     // optional, defaults to 60
    //   }),
    // })
    // .then((res) => res.json())
    // .then((res) => {
    //   localStorage.setItem("auth_token", res.token);
    //   console.log("res", res);
    // });
  };

  return (
    <div>
      <p>
        User ID:
        <input
          placeholder="Please Enter Your Name"
          type="text"
          onChange={(e) => {
            dispatch(updateUserId(e.target.value));
          }}
        ></input>
      </p>
      <p>
        Password:
        <input
          placeholder="Please Enter Your Password"
          type="password"
          onChange={(e) => {
            dispatch(updatePassword(e.target.value));
          }}
        ></input>
      </p>
      <p>
        <button onClick={handleFn}>Login</button>
      </p>
    </div>
  );
};

export default Login;
