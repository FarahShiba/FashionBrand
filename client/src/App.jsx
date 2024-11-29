import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; //Parent route with Outlet
import Home from "./pages/Home"; // Child route component
import SignUp from "./pages/auth/SignUp"; // Child route component
import Login from "./pages/auth/Login"; // Child route component
import Dashboard from "./pages/auth/Dashboard"; // Child route component
import ProductPage from "./pages/product/ProductPage";
import ProductDetail from "./pages/product/ProductDetail"; // Child route component
import AddProduct from "./pages/product/AddProduct";
import EditProduct from "./pages/product/EditProduct"; // Child route component
import AboutUs from "./pages/AboutUs"; // Child route component
import FashionPage from "./pages/FashionPage"; // Child route component
import Contact from "./pages/Contact"; // Child route component
import NotFound from "./pages/NotFound"; // Child route component

import PrivateRoutes from "./components/layout/PrivateRoutes"; // Private route component
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        {/* Child routes will render inside the Outlet of the parent Layout */}
        <Route path="/" element={<Layout />}>
          {/* index is used to signify that it is the default route within its parent, making it the main page of my application. */}
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<CartPage />} /> {/* Cart route */}
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="fashion" element={<FashionPage />} />
            <Route path="fashion/product/add" element={<AddProduct />} />
            {/* Add this line */}
            {/* Other product routes */}
            <Route path="fashion/products" element={<ProductPage />} />
            <Route path="fashion/product/:id" element={<ProductDetail />} />
            <Route path="fashion/product/edit/:id" element={<EditProduct />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
