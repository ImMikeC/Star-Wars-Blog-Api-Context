//import react into the bundle
import React from "react";
import { ReactDOM, render } from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle';

import Layout from "./layout";

render(<Layout />, document.querySelector("#root"));
