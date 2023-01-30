import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import PaymentSuccess from "../pages/PaymentSuccess";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";

const Navigation = () => {
    const productsInCart = useSelector(cartProducts)

    return (
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;