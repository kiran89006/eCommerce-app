import { ImageSharp } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBasketProductsAPI from "./Redux/Basket/actionCreator";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  // const [cartData, setCartData] = useState({});
  const { cartData, error, loading } = useSelector((state) => {
    return state.fetchBasketProductsReducer;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("usersData");
    const parsedData = JSON.parse(data);
    dispatch(fetchBasketProductsAPI());
    // console.log("usersData", parsedData);
  }, []);

  console.log("cartData", cartData);

  const totalPrice = () => {
    // let z = 0;
    // cartData?.carts?.map((x) => {
    //   x.products.map((y) => {
    //     z += y.price;
    //   });
    // });
    // return z?.toFixed(2);
    //console.log("z value", z);

    // const productsData = cartData?.carts?.[0].products || [];
    //optional chaining(?.) and default value.

    const { products: productsData = [] } = cartData?.carts?.[0] || {}; // short circuting, optinal chaining, destructing

    // const cartData = {
    //   carts: [
    //     {
    //       products: []
    //     }
    //   ]
    // }

    // cartData.carts[0] === {  products: []}

    // const cartData = {};

    // const cartData = {
    //   carts: [
    //     {
    //       products: [{}, {}]
    //     }
    //   ]
    // }

    const totalCost = productsData.reduce((acc, val) => {
      // console.log("val", val);
      return (acc += val.price);
    }, 0);

    // iteration 1, acc = 0 ,
    // iteration 2 , acc = 10,
    return totalCost.toFixed(2);
    // console.log("totalCost", totalCost);
  };

  const placeOrderFn = () => {
    navigate("/OrderDetailPage", { state: { cartData } });
  };

  const activityIndicator = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  };
  console.log("basket page navigation done");

  return (
    <div>
      {loading ? (
        activityIndicator()
      ) : (
        <>
          {cartData?.carts?.map((cartDetails) => {
            return cartDetails.products.map((productDetails) => {
              const { thumbnail, quantity, title, price } = productDetails;
              return (
                <div>
                  <p>{title}</p>
                  <img
                    src={thumbnail}
                    style={{ width: 150, height: 150 }}
                  ></img>
                  <p>Quantity: {quantity}</p>
                  <p>Price: ${price}</p>
                  <p>------------------------------------------</p>
                </div>
              );
            });
          })}
          <p>Total price: {totalPrice()}</p>
        </>
      )}
      <div style={{ justifyContent: "flex-end", display: "flex" }}>
        <button
          style={{
            width: 250,
            height: 50,
            background: "#f57c00",
            color: "#fff",
            fontSize: 20,
            border: "#f57c00",
            borderRadius: 10,
            alignSelf: "flex-end",
          }}
          onClick={placeOrderFn}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Basket;

//basketProductsSuccessFn
