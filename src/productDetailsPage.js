import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import Icon from "@mui/material/Icon";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Redux/ProductDetails/actionCreaters";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { Alert, Button, Snackbar } from "@mui/material";
import AppBar from "./AppBar";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    loading,
    productDetails: productList,
    error,
  } = useSelector((state) => {
    return state.productsDetailsReducer;
  });

  const [showSnackBar, setShowSnackBar] = useState(false);
  let usersData = JSON.parse(localStorage.getItem("usersData"));

  useEffect(() => {
    dispatch(fetchProducts(location.state.id));
  }, []);

  const cartFn = () => {
    navigate("/basket");
  };

  const profileFn = () => {
    navigate("/Profile");
  };

  const addToCartFn = (snackbar) => {
    const body = {
      userId: usersData.id,
      products: [
        {
          id: productList.id,
          quantity: 1,
        },
      ],
    };

    const headers = { "Content-Type": "application/json" };

    axios
      .post("https://dummyjson.com/carts/add", body, {
        headers,
      })
      .then((res) => {
        if (snackbar == "isSnackBarTrue") {
          setShowSnackBar(true);
        } else {
          navigate("/basket");
        }
      })
      .catch((error) => {});
  };

  // (() => {
  //   var x = "kiran";
  //   if (true) {
  //     var x = "teja";
  //     let id = 1234;
  //     const role = "developer";
  //     id = 4567;
  //     role = "developers";
  //     console.log("id", id);
  //     console.log("role", role);
  //   }
  //   console.log("name,id,role", x);
  // })();

  return (
    <>
      {/* <AppBar
        position="static"
        style={{ height: 80, justifyContent: "center" }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {productList.title}
          </Typography>
        </Toolbar>
      </AppBar> */}

      <AppBar
        title={productList.title}
        loc={location}
        cartFn={cartFn}
        profileFn={profileFn}
      />

      <div style={{ paddingLeft: 24, flexDirection: "row", display: "flex" }}>
        <Snackbar
          open={showSnackBar}
          autoHideDuration={6000}
          onClose={() => {
            setShowSnackBar(false);
          }}
          key={"top center"}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert
            onClose={() => {
              setShowSnackBar(false);
            }}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Product added to the cart Successfully
          </Alert>
        </Snackbar>
        <div style={{ margin: 8 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={productList.images}
              style={{
                width: "550px",
                height: "400px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "25px",
              }}
            ></img>
            {/* <button style={{ width: "150px", height: "50px" }}>ADD TO CART</button>
        <button style={{ width: "150px", height: "50px" }}>BUY NOW</button> */}
            {/* <Stack direction="row" spacing={2}> */}
            <div
              style={{
                marginTop: 10,
                // flex: 1,
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                style={{
                  width: 200,
                  height: 50,
                  background: "#ff9f00",
                  fontWeight: "bold",
                  color: "#fff",
                }}
                onClick={() => addToCartFn("isSnackBarTrue")}
              >
                <ShoppingBasketRoundedIcon style={{ marginRight: 10 }} /> ADD TO
                CART
              </Button>

              <Button
                variant="contained"
                style={{
                  width: 200,
                  height: 50,
                  background: "#fb641b",
                  fontWeight: "bold",
                  color: "#fff",
                }}
                onClick={addToCartFn}
              >
                <BoltRoundedIcon /> BUY NOW
              </Button>
            </div>
          </div>

          {/* </Stack> */}
        </div>
        <div style={{ margin: 8, flex: 1 }}>
          <h3 style={{ color: blue }}>{productList.title}</h3>
          <p>Rating {productList.rating}</p>

          <h1>${productList.price}</h1>

          <p>
            {/* <Icon
              sx={{ filter: "invert(1)" }}
              baseClassName="material-icons-two-tone"
              color="red"
            >
              add_circle
            </Icon> */}
            <LocalOfferTwoToneIcon style={{ color: "green" }} />
            <b>Bank Offer</b> 31000 Off On Axis Bank Credit Card Transactions.
            <a href="#">T&C</a>
          </p>
          <p>
            <LocalOfferTwoToneIcon style={{ color: "green" }} />
            <b>Special Price</b> Get extra 3000 off (price inclusive of
            cashback/coupon)
            <a href="#">T&C</a>
          </p>

          <p>
            <LocalOfferTwoToneIcon style={{ color: "green" }} />
            <b>Partner Offer</b> Make a purchase and enjoy a surprise cashback/
            coupon that you can redeem later! <a href="#">Know More</a>
          </p>

          <p>
            <LocalOfferTwoToneIcon style={{ color: "green" }} />
            <b>No cost EMI $3,334/month.</b> Standard EMI also available
            <a href="#">View Plans</a> ›
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;

// fetch('https://dummyjson.com/carts/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     userId: 1,
//     products: [
//       {
//         id: 144,
//         quantity: 4,
//       },
//       {
//         id: 98,
//         quantity: 1,
//       },
//     ]
//   })
// })
// .then(res => res.json())
// .then(console.log);
