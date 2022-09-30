import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Detail from "./views/Detail.js";

import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {

    const basename = process.env.BASENAME || "";

    return (
        <div className="d-flex flex-column">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/:section/:id" element={<Detail/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
