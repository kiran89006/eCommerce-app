import { Provider } from "react-redux";
import Login from "./login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductListingPage from "./productListingPage";
import { store } from "./Redux/store";
import ProductDetailsPage from "./productDetailsPage";
import Basket from "./basket";
import OrderDetailPage from "./OrderDetailPage";
import Profile from "./Profile";

function App() {
  let usersData = JSON.parse(localStorage.getItem("usersData"));

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="../login" element={<Login />} /> */}
            {/* <Route path="/" element={<DefaultPage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={usersData?.token ? <ProductListingPage /> : <Login />}
            />
            <Route
              path="/productDetailsPage"
              element={<ProductDetailsPage />}
            />
            <Route path="/basket" element={<Basket />} />
            <Route path="/OrderDetailPage" element={<OrderDetailPage />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
