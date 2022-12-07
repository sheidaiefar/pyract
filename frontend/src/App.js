import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/signup/Signup";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;