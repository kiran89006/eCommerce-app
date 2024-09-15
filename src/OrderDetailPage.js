import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import fetchBasketProductsAPI from "./Redux/Basket/actionCreator";
import { AppBar, Typography } from "@mui/material";

const OrderDetailPage = () => {
  const location = useLocation();
  console.log("orderdetails", location.state.cartData);
  const { cartData } = location.state;

  return (
    <div>
      {/* <p>this is orders details page</p> */}
      <div>
        <AppBar
          position="static"
          style={{ height: 60, justifyContent: "center" }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Order Details Page
          </Typography>
        </AppBar>
      </div>

      {/* {cartData?.carts?.map((orders) => {
        return <p>{orders.title}</p>;
      })} */}
      <div style={{ padding: 12 }}>
        {cartData.carts.map((orders) => {
          return orders.products.map((productdetails) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  margin: 15,
                  borderRadius: 5,
                }}
              >
                <div>
                  <img src={productdetails.thumbnail}></img>
                </div>

                <div
                  style={{
                    width: 0.5,
                    height: 300,
                    backgroundColor: "rgb(161 147 147 / 35%)",
                  }}
                ></div>

                <div style={{ padding: 10 }}>
                  <p>Title: {productdetails.title}</p>
                  <p>Price: {productdetails.price}</p>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Placed an Order
                  </p>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default OrderDetailPage;
