import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Constants } from "./Constants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const logOutFn = () => {
    localStorage.removeItem("usersData");
    navigate("/");
  };

  const genFn = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <p>this is profile page</p>
      <img
        alt="image"
        src="https://i.pinimg.com/236x/85/59/09/855909df65727e5c7ba5e11a8c45849a.jpg"
      ></img>
      <p>Kiran Kumar reddy</p>
      <p>Orders</p>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        LogOut
      </button>
      <Modal
        open={openModal}
        // onClose={handleClose}
      >
        <div style={style.modalStyle}>
          <p>{Constants.logoutConfirmation}</p>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <button onClick={logOutFn}>YES</button>
            <button onClick={genFn}>NO</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;

const style = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",

    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  },
};
