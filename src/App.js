import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Landing from "./pages/Landing";
import Footer from "./components/sections/Footer";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Details from "./pages/Details";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/pricing">
                    <Pricing/>
                </Route>

                <Route path="/details">
                    <Details/>
                </Route>

                <Route path="/contact">
                    <ContactUs/>
                </Route>

                <Route path="/">
                    <Landing/>
                </Route>
            </Switch>
        </Router>
    );
}
