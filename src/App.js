import { Route, Routes } from "react-router-dom";
import SignUp from "./SubPages/SignUp";
import "./style.css";
import "./all.min.css";
import Login from "./SubPages/Login";
import Dashboard from "./dashboard/Dashboard";
import Users from "./dashboard/Users";
import UpdateUser from "./dashboard/UpdateUser";
import CreateUser from "./dashboard/CreateUser";
import Products from "./dashboard/Products/Products";
import CreateProducts from "./dashboard/Products/CreateProducts";
import UpdateProducts from "./dashboard/Products/UpdateProducts";
import AboutUsPage from "./SubPages/AboutUsPage";
import Page from "./MainPages/Page";
import ContactUsPage from "./SubPages/ContactUsPage";
import OurProducts from "./MainPages/OurProducts";
import NoProducts from "./Tool/NoProducts";

function App() {
  // Render Data
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Page />} />
        <Route path={"/about"} element={<AboutUsPage />} />
        <Route path={"/contactUs"} element={<ContactUsPage />} />
        <Route path={"/our-products"} element={<OurProducts />} />

        <Route path={"/register"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
        {/* <Route element={<Persist />}> */}
        {/* <Route element={<NoToken />}> */}
        <Route path={"/dashboard"} element={<Dashboard />}>
          <Route path={"users"} element={<Users />} />
          <Route path={"users/:id"} element={<UpdateUser />} />
          <Route path={"createUser"} element={<CreateUser />} />
          <Route element={<NoProducts />}>
            <Route path={"dash-products"} element={<Products />} />
          </Route>
          <Route path={"createProducts"} element={<CreateProducts />} />
          <Route path={"dash-products/:id"} element={<UpdateProducts />} />
        </Route>
        {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
