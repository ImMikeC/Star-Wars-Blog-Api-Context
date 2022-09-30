import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Detail from "./views/Detail.js";

import injectContext from "./store/appContext";

import Navbar from "./component/navbar";

//create your first component
const Layout = () => {


    return (
        <div className="d-flex">
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
