import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Profile from "./Profile";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Images } from "./Images";
import { Constants } from "./Constants";
import AppBar from "./AppBar";

const ProductListingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productData, setProductData] = useState([]); // productData = []
  const [totalCount, setTotalCount] = useState(0); // totalCount =0
  const [skip, setSkipValue] = useState(0); // skip = 0
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState("");

  const items = [
    {
      image: Images.img1,
    },
    {
      image: Images.img2,
    },
    {
      image: Images.img3,
    },
    {
      image: Images.img4,
    },
    {
      image: Images.img5,
    },
  ];

  useEffect(() => {
    fetchProductsApi();
  }, []);

  const handleChange = () => {
    fetchProductsApi();
  };

  const fetchProductsApi = () => {
    axios
      .get(`https://dummyjson.com/products?limit=20&skip=${skip}`)
      .then((res) => {
        const { products, total } = res.data;
        // const filterdProducts = products.filter((val) => {
        //   return val.price <= 5;
        // });
        // setProductData(filterdProducts);
        setProductData(products);
        if (skip == 0) {
          setTotalCount(total); // totalCount = 194
        }
        if (skip <= totalCount) {
          setSkipValue(skip + 20); // skip = 20
        }
      });
  };
  const abc = ({ id }) => {
    navigate("/productDetailsPage", { state: { id } });
  };

  const searchApi = (searchQuery) => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then((res) => {
        console.log(res);
        const { products } = res.data;
        setSearchedProduct(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSearchFn = (searchText) => {
    if (searchText.length > 3) {
      searchApi(searchText);
    }
    setSearchedQuery(searchText);
  };

  const token = localStorage.getItem("usersData");
  const parsedToken = JSON.parse(token);
  // console.log("token", token);
  // console.log("parsedToken", parsedToken);

  const cartFn = () => {
    navigate("/basket");
  };

  const profileFn = () => {
    navigate("/Profile");
  };

  const Item = (props) => {
    return (
      <Paper>
        <img alt="" src={props.item.image} style={style.corouselImage}></img>
      </Paper>
    );
  };

  const ProductListingUI = (props) => {
    const { key, product } = props;
    return (
      <div style={style.productListing} onClick={() => abc(product)}>
        <img alt="" src={product.images} style={style.productImage}></img>
        <p>{product.title}</p>
        <p>
          {Constants.price} ${product.price}
        </p>
        <p>
          {Constants.rating} {product.rating}⭐︎
        </p>
      </div>
    );
  };

  return (
    <div>
      <AppBar
        cartFn={cartFn}
        profileFn={profileFn}
        parsedToken={parsedToken}
        loc={location}
      />

      <div style={style.searchContainer}>
        <input
          type="text"
          placeholder={Constants.placeHolderText}
          style={style.searchInput}
          onChange={(e) => onSearchFn(e.target.value)}
        ></input>
      </div>

      <Carousel interval={1000} animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      {searchedQuery.length < 4
        ? productData.map((product, i) => {
            return <ProductListingUI key={i} product={product} />;
          })
        : null}

      <div>
        {searchedQuery.length > 3
          ? searchedProduct.map((product, i) => {
              return <ProductListingUI key={i} product={product} />;
            })
          : null}
      </div>

      {searchedProduct.length == 0 && searchedQuery.length > 3 ? (
        <p>
          {Constants.noProductFound} {searchedQuery}
        </p>
      ) : null}
      <div>
        {productData.length == 0 && searchedProduct.length == 0 ? (
          <Pagination
            count={Math.round(totalCount / 20)}
            color="primary"
            onChange={handleChange}
          />
        ) : null}
      </div>
    </div>
  );
};

const style = {
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: { height: 30, width: 600 },
  productListing: {
    float: "left",
    padding: 8,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    margin: 16,
  },
  productImage: {
    width: "250px",
    height: "250px",
  },
  corouselImage: { width: "100%", height: 400 },
};

export default ProductListingPage;
