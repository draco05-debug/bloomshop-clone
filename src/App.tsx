import { Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import Cart from "./constant/cart";
import Contact from "./constant/contact";
import Password from "./pages/password";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/password" element={<Password />} />
      </Route>
    </Routes>
  );
}

export default App;
