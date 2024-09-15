import React from "react";
import { Constants } from "./Constants";

const AppBar = (props) => {
  console.log("props from appbar", props);

  const userData = localStorage.getItem("usersData");
  const parsedUserData = JSON.parse(userData);

  return (
    <div style={style.container}>
      <div style={style.flex6}>
        <p style={style.websiteTitle}>
          {props.loc.pathname == "/productDetailsPage"
            ? props.title
            : Constants.websiteTitle}
        </p>
      </div>
      <div style={style.buttonsContainer}>
        <button style={style.buttons} onClick={props.cartFn}>
          Cart
        </button>

        <button style={style.buttons} onClick={props.profileFn}>
          {parsedUserData?.token ? Constants.profile : Constants.login}
        </button>
      </div>
    </div>
  );
};

export default AppBar;

const style = {
  container: {
    background: "#0c0c7f",
    display: "flex",
    flex: 1,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  flex6: {
    flex: 0.6,
  },
  websiteTitle: {
    textAlign: "left",
    color: "white",
    fontSize: 24,
  },
  buttonsContainer: {
    flex: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttons: { width: 70, height: 35 },
};
