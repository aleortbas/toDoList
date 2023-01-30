import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./HomeCompenent";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

export default Main;