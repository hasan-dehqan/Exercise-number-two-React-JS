import React, { Component } from "react";
import Home from "./components/Home.js";
import Movies from "./components/Movies.js"
import AboutUs from "./components/AboutUs.js";
import { Link, Route, Routes } from "react-router-dom";

import style from "./styles/style.module.css";

class App_mv extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <div className={style["navbar"]}>
                    <ul className={style["nav"]}>
                        <li>
                            <Link to="/">Home</Link>.
                        </li>
                        <li>
                            <Link to="Movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="AboutUs">AboutUs</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.box1}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                    <Routes>
                        <Route path="/Movies" element={<Movies />}></Route>
                    </Routes>
                    <Routes>
                        <Route path="/AboutUs" element={<AboutUs />}></Route>
                    </Routes>



                </div>
            </>
        );
    }
}

export default App_mv;